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


    //State de carga de informacion
    const [isLoading, setIsloading] = useState(true);
    //State de cambio de fecha
    const [dateReport, setDate] = useState(undefined);
    //State de nueva data
    const [newData, setnewData] = useState(false);
    //State de stock
    const [stock, setStock] = useState(false);

    

    //Funcion para obtener la data
    const getData = async() => {
        const [MSI, loc, lost, chart, chartCenter, chartTime] = await Promise.all([
                (await fetchFunction(dateReport? !stock ? `Routes/MSI.php?date="${dateReport}"&stock=false` : `Routes/MSI.php?date="${dateReport}"` : !stock ? "Routes/MSI.php?stock=false":"Routes/MSI.php")).json(),
                (await fetchFunction(dateReport? `Routes/Located.php?date="${dateReport}"` : 'Routes/Located.php')).json(),
                (await fetchFunction(dateReport? !stock ? `Routes/Lost.php?date="${dateReport}"&stock=false` : `Routes/Lost.php?date="${dateReport}"` : !stock ? 'Routes/Lost.php?stock=false' :'Routes/Lost.php?stock=false' )).json(),
                (await fetchFunction(dateReport? !stock ? `Routes/Chart.php?date=${dateReport}&stock=false` :`Routes/Chart.php?date=${dateReport}` : !stock ? 'Routes/Chart.php?stock=false' :'Routes/Chart.php' )).json(),
                (await fetchFunction(dateReport? `Routes/ChartConectivity.php?date=${dateReport}` : 'Routes/ChartConectivity.php')).json(),
                (await fetchFunction(dateReport? `Routes/ChartTime.php?date=${dateReport}` : 'Routes/ChartTime.php')).json(),
        ]);
        

        setIsloading(true);
        
/*         console.log("msi",MSI);
        console.log("located",...loc);
        console.log("lost",lost);
        console.log("chart",chart);
        console.log("chartCenter",chartCenter);
        console.log("chartTime", chartTime); */

        //Estableciendo la data
        setData({
            msi: {data:MSI.data, count: MSI.count}, 
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
    }, [dateReport, newData,stock]);

/*     useEffect(() => {
        console.log(stock);
        const hola = dateReport? !stock ?  `Routes/MSI.php?date="${dateReport}"&stock=false` : `Routes/MSI.php?date="${dateReport}"`  : !stock ? "Routes/MSI.php?stock=false":"Routes/MSI.php";
        console.log(hola);
        
    }, [stock]) */

    return {
        ...data,
        isLoading,
        setIsloading,
        setDate,
        setnewData,
        dateReport,
        stock, 
        setStock
    }


}

export default UseData