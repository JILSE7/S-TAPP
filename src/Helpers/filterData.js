
//Filtrar vehiculos que nos sean de almacen para las tablas
export const newStock = (data) => data.filter(car => car.H_Conectivity_Customer !== "Z STOPNTRACK");

//Filtrar vehiculos que nos sean de almacen para las tablas
export const newStockChart = function (data, msi = false){
        const b = [];
        (msi) ?  data.forEach(item => b.push({date: item.date,msi: newStock(item.msi)})) : data.forEach(item => b.push({date: item.date,located: newStock(item.located)}));

        return b;
}


//Filtrar LABELS
export const chartData = (data, msi = false) => {
    const labels = [];
    (msi) ? data.forEach((msi, i) => labels.push(data[data.length -(i+1)].msi.length)) : data.forEach((msi, i) => labels.push(data[data.length -(i+1)].located.length));

    return labels;
}

//Causas Principales

//Labels
export const chartLostLabels = (data) => {
    return [ ...new Set(data.map(lost => (lost.H_Conectivity_Alias_2_Status === null) ? 'Sin status registrado' : lost.H_Conectivity_Alias_2_Status))]; 
}

//DataLabels
export const chartLostData = (labels, data, arr = false) => {
    
    let aux2 = {};
    for(const label of labels){
        //aux2 = {...aux2, [label]: data.filter(key =>(label === 'Sin status registrado') ? key.H_Conectivity_Alias_2_Status === null:  key.H_Conectivity_Alias_2_Status === label)}
        aux2 = {...aux2, [label]:(!arr) ? filter(data,label,true) : filter(data,label)}
    }

    return aux2;
}

//Count Data

export const filter = (obj,label,length = false) => {

    if(length){
        return obj.filter(key =>(label === 'Sin status registrado') ? key.H_Conectivity_Alias_2_Status === null:  key.H_Conectivity_Alias_2_Status === label).length
    }else{
        return obj.filter(key =>(label === 'Sin status registrado') ? key.H_Conectivity_Alias_2_Status === null:  key.H_Conectivity_Alias_2_Status === label)
    }

     //return Object.values(obj).map(item => item.length);
}



