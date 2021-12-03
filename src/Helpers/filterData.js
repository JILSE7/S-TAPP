
//Filtrar vehiculos que nos sean de almacen para las tablas
export const newStock = (data) => data.filter(car => car.H_Conectivity_Customer !== "Z STOPNTRACK");

//Filtrar vehiculos que nos sean de almacen para las tablas
export const newStockChart = function (data, msi = false){
        const b = [];
        (msi) ?  data.forEach(item => b.push({date: item.date,msi: newStock(item.msi)})) : data.forEach(item => b.push({date: item.date,located: newStock(item.located)}));

        return b;
}


//Filtrar datos para las graficas
export const chartData = (data, msi = false) => {
    const valuesChart = [];
    (msi) ? data.forEach((msi, i) => valuesChart.push(data[data.length -(i+1)].msi.length)) : data.forEach((msi, i) => valuesChart.push(data[data.length -(i+1)].located.length));
    return valuesChart;
}

//Causas Principales

//Labels - etiquetas para las graficas
export const chartLostLabels = (data) => {
    return [ ...new Set(data.map(lost => (lost.H_Conectivity_Alias_2_Status === null) ? 'Sin status registrado' : lost.H_Conectivity_Alias_2_Status))]; 
}

//DataLabels
export const chartLostData = (labels, data, arr = false) => {
    let aux2;
    let aux3 = []
    for(const label of labels){
        aux2 = {status:label, value: (!arr) ? filter(data,label,true) : filter(data,label)}
        aux3.push(aux2);
    }
    
    aux3 = aux3.sort((a,b) => b.value - a.value);
    return aux3;
}

//Contador de datos para la grafica causas principales
export const filter = (obj,label,length = false) => {

    if(length){
        return obj.filter(key =>(label === 'Sin status registrado') ? key.H_Conectivity_Alias_2_Status === null:  key.H_Conectivity_Alias_2_Status === label).length
    }else{
        return obj.filter(key =>(label === 'Sin status registrado') ? key.H_Conectivity_Alias_2_Status === null:  key.H_Conectivity_Alias_2_Status === label)
    }

}






