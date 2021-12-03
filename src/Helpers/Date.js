
export const getDateForTable = (date_generation) => {
     let d = new Date(date_generation);
    d = new Date(d.setDate(d.getDate()-1));
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`; 
};