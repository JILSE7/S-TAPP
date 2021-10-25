import { useEffect, useState } from 'react'
import { fetchFunction } from '../Helpers/fetch';

const UseData = () => {
    const [data, setData] = useState({
        msi: [],
        located: [],
        lost: [],
        chart: []
    });

/*     const [isLoadingMSI, setisLoadingMSI] = useState(true);
    const [isLoadingLoc, setisLoadingLoc] = useState(true); */

    const [isLoading, setIsloading] = useState(true);
    const [dateReport, setDate] = useState(undefined);
    const [newData, setnewData] = useState(false);

    

    //Funcion para obtener la data
    const getData = async() => {
        const [MSI, loc, lost, chart] = await Promise.all([
                (await fetchFunction(dateReport? `Routes/MSI.php?date="${dateReport}"` : "Routes/MSI.php")).json(),
                (await fetchFunction(dateReport? `Routes/Located.php?date="${dateReport}"` : 'Routes/Located.php')).json(),
                (await fetchFunction(dateReport? `Routes/Lost.php?date="${dateReport}"` : 'Routes/Lost.php')).json(),
                (await fetchFunction(dateReport? `Routes/Chart.php?date="${dateReport}"` : 'Routes/Chart.php')).json()
        ]);

        setIsloading(true);

        //Estableciendo la data
        setData({
            msi: [...MSI],
            located: [...loc],
            lost : [...lost],
            chart: [...chart]
        });

        setTimeout(() => {
            setIsloading(false);
        }, 800);

    }

    
    useEffect(() => {
        
        getData();
    }, [dateReport, newData]);


    return {
        ...data,
        isLoading,
        setIsloading,
        setDate,
        setnewData,
        dateReport
    }


}

export default UseData