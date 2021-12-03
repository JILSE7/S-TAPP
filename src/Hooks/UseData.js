import { useEffect, useState } from 'react'
import { fetchFunction } from '../Helpers/fetch';

const UseData = () => {
    const [data, setData] = useState({

        msi: [],
        located: [],
        lost: [],
        chartMsi: [],
        chartLocated: [],
        chartPorcent: [],
        chartTime: [],
    });

/*     const [isLoadingMSI, setisLoadingMSI] = useState(true);
    const [isLoadingLoc, setisLoadingLoc] = useState(true); */

    const [isLoading, setIsloading] = useState(true);
    const [dateReport, setDate] = useState(undefined);
    const [newData, setnewData] = useState(false);

    

    //Funcion para obtener la data
    const getData = async() => {
        const [MSI, loc, lost, chart, chartCenter, chartTime] = await Promise.all([
                (await fetchFunction(dateReport? `Routes/MSI.php?date="${dateReport}"` : "Routes/MSI.php")).json(),
                (await fetchFunction(dateReport? `Routes/Located.php?date="${dateReport}"` : 'Routes/Located.php')).json(),
                (await fetchFunction(dateReport? `Routes/Lost.php?date="${dateReport}"` : 'Routes/Lost.php')).json(),
                (await fetchFunction(dateReport? `Routes/Chart.php?date=${dateReport}` : 'Routes/Chart.php')).json(),
                (await fetchFunction(dateReport? `Routes/Chart2.php?date=${dateReport}` : 'Routes/Chart2.php')).json(),
                (await fetchFunction(dateReport? `Routes/ChartTime.php?date=${dateReport}` : 'Routes/ChartTime.php')).json(),
        ]);
        

        setIsloading(true);
        
        //Estableciendo la data
        setData({
            msi: [...MSI],
            located: [...loc],
            lost : [...lost],
            chartMsi: [...chart.msi],
            chartLocated : [...chart.located],
            chartPorcent : [...chartCenter],
            chartTime: [...chartTime.data]
        });

        
            setIsloading(false);
        

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