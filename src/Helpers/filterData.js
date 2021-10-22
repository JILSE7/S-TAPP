
//Filtrar vehiculos que nos sean de almacen
export const newStock = (data) => data.filter(car => car.H_Conectivity_Customer !== "Z STOPNTRACK");
