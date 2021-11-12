import { useContext, useEffect, useState } from 'react'
import { chartData, chartLostData, newStock, newStockChart } from '../Helpers/filterData';
import { StopContext } from '../Store/StoreContext'
import UseData from './UseData';

const UseChart = () => {
    //EXTRACCION DEL CONTEXTO
    const {chartMsi = [], chartLocated=[],lostFiltered,lost,stock, isLoading} = useContext(StopContext);

    const [chartFiltered, setchartFiltered] = useState({msi: {data:[], labels: []}, located: {data: [], labels: []}});
    const [chartLost, setchartLost] = useState({data: [], labels: []});
    

    //Efecto para filtrar los datos del almacen
    useEffect(() => {
        
    if(!stock){
        setchartFiltered({msi: { data : newStockChart(chartMsi, true), labels:chartData(newStockChart(chartMsi, true), true) }, located : {data: newStockChart(chartLocated), labels: chartData(newStockChart(chartLocated)) }});
        setchartLost({labels : chartLostData(lostFiltered)});

    }else{
        setchartFiltered({msi: {data:chartMsi, labels: chartData(chartMsi,true)}, located: {data: chartLocated, labels: chartData(chartLocated)}});
        setchartLost({labels : chartLostData(lost)});
    }
        
    }, [isLoading, stock])
    
    console.log(stock);
    
    //ETIQUETAS DE LAS FECHAS
    const labels = chartMsi.map(msi => msi.date);
    labels.sort();


    //VALORES EN GRAFICA DE BARRAS

    const cReason = [];
    chartLocated.forEach((loc, i) => {
        
        loc.located.forEach(status => cReason.push((status.H_Conectivity_Alias_2_Status === null) ? 'Sin status registrado' : status.H_Conectivity_Alias_2_Status));
    });

    //LABELS C
    const cReasonLabels =[ ...new Set(cReason)];

    
    
    /* for(let countR of cReasonLabels ){
        console.log(countR);
    } */

          
    
    
   
    
    
    return{
        labels,
        cReason,
        cReasonLabels,
        chartFiltered,
        chartLost

    }
    
   
}

export default UseChart
