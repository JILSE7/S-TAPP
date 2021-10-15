import { DatePicker } from 'antd'
import React, { useContext } from 'react'
import Header from '../Components/Layout/Header'
import Report from '../Components/Reports/Report'
import { StopContext } from '../Store/StoreContext'

import { format, compareAsc } from 'date-fns'




const Reports = () => {



    const {setDate, dateReport} = useContext(StopContext);

        

    function onChange(date, dateString) {
        
        if(dateString){
            setDate(dateString)    
        }

        
        
}
    

    return (
        <div className="container">
            <Header/>
            <section className="reports">
                <div className="date">
                    <h1>Fecha de Reportes: {dateReport ? dateReport : format(new Date(), "yyyy-MM-dd")} </h1>
                    <DatePicker onChange={onChange} />
                </div>
                <Report className="mt-5"/>
            </section>
            
        </div>
    )
}

export default Reports
