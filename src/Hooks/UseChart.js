import { useContext } from 'react'
import { StopContext } from '../Store/StoreContext'

const UseChart = () => {
    const {chart} = useContext(StopContext);

    const data = [];
    chart.forEach(status => {
        data.push({name: !status.name ? "Sin status": status.name, value: status.value * 1})
    });

    
    
    const total = chart.reduce((a,c) => a+(c.value)*1, 0);
    const val = chart.map(n => n.value);
    const labels = chart.map(n => (n.name == null) ? "sin registro" : n.name);

    
    
    
    return{
        data,
        total,
        val,
        labels
    }
   
}

export default UseChart
