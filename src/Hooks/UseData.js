import React, { useEffect, useState } from 'react'
import { fetchFunction } from '../Helpers/fetch';

const UseData = () => {
    const [data, setData] = useState({
        msi: [],
        located: [],
        lost: []
    });

/*     const [isLoadingMSI, setisLoadingMSI] = useState(true);
    const [isLoadingLoc, setisLoadingLoc] = useState(true); */

    const [isLoading, setIsloading] = useState(true);
    const [dateReport, setDate] = useState(undefined);

    console.log(dateReport);

    //Funcion para obtener la data
    const getData = async() => {
        const [MSI, loc, lost] = await Promise.all([
                (await fetchFunction(dateReport? `Routes/MSI.php?date="${dateReport}"` : "Routes/MSI.php")).json(),
                (await fetchFunction(dateReport? `Routes/Located.php?date="${dateReport}"` : 'Routes/Located.php')).json(),
                (await fetchFunction(dateReport? `Routes/Lost.php?date="${dateReport}"` : 'Routes/Lost.php')).json()
        ]);

        setIsloading(true);

        //Estableciendo la data
        setData({
            msi: [...MSI],
            located: [...loc],
            lost : [...lost]
        });

        setTimeout(() => {
            setIsloading(false);
        }, 800);

    }

    
    useEffect(() => {
        getData();
    }, [dateReport]);


    return {
        ...data,
        isLoading,
        setIsloading,
        setDate,
        dateReport
    }


}

export default UseData