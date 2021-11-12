
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


export const chartLostData = (data) => {
    const aux = [];
    data.forEach((lost) => {

        (lost.H_Conectivity_Alias_2_Status === null) ? aux.push('Sin status registrado') : aux.push(lost.H_Conectivity_Alias_2_Status)
        
        //loc.located.forEach(status => cReason.push((status.H_Conectivity_Alias_2_Status === null) ? 'Sin status registrado' : status.H_Conectivity_Alias_2_Status));
    });

     return [ ...new Set(aux)];
    
}
