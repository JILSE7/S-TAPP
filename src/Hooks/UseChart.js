import { useContext, useEffect, useState } from 'react'
import { chartData, chartLostData, chartLostLabels, chartLostValues, newStock, newStockChart } from '../Helpers/filterData';
import { StopContext } from '../Store/StoreContext'
import UseData from './UseData';

const UseChart = () => {
    //EXTRACCION DEL CONTEXTO
    const {chartMsi = [], chartLocated=[],lostFiltered,lost,stock, isLoading} = useContext(StopContext);

    const [chartFiltered, setchartFiltered] = useState({msi: {data:[], labels: []}, located: {data: [], labels: []}});
    const [chartLost, setchartLost] = useState({data: [], labels: [], arr:[]});
    

    //Efecto para filtrar los datos del almacen
    useEffect(() => {
        
    if(!stock){
        setchartFiltered({msi: { data : newStockChart(chartMsi, true), labels:chartData(newStockChart(chartMsi, true), true) }, located : {data: newStockChart(chartLocated), labels: chartData(newStockChart(chartLocated)) }});
        setchartLost({data: chartLostData(chartLostLabels(lostFiltered), lostFiltered),labels : chartLostLabels(lostFiltered),arr: chartLostData(chartLostLabels(lostFiltered), lostFiltered, true)});
    }else{
        setchartFiltered({msi: {data:chartMsi, labels: chartData(chartMsi,true)}, located: {data: chartLocated, labels: chartData(chartLocated)}});
        setchartLost({ data:chartLostData(chartLostLabels(lost), lost), labels : chartLostLabels(lost),arr: chartLostData(chartLostLabels(lost), lost, true)});
    }
        
    }, [isLoading, stock])
    
    console.log(chartLost);
    //ETIQUETAS DE LAS FECHAS
    const labels = chartMsi.map(msi => msi.date);
    labels.sort();

             
    return{
        labels,
        chartFiltered,
        chartLost
    }
    
}

export default UseChart
