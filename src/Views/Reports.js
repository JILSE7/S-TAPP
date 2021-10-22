import { DatePicker } from 'antd'
import React, { useContext, useState } from 'react'
import { StopContext } from '../Store/StoreContext'
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer';
import Report from '../Components/Reports/Report'

//ICONS
import {ImCheckboxChecked,ImCheckboxUnchecked} from 'react-icons/im';
import {AiTwotoneCar} from 'react-icons/ai';
import { format } from 'date-fns';



const Reports = () => {

    //Context
    const {setDate, dateReport, stock, setStock} = useContext(StopContext);

   
    //ToogleFunction
    const toggleStock = () => {
        setStock(!stock)
    }

    function onChange(date, dateString) {
        
        if(dateString){
            setDate(dateString);
            setStock(false);    
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
                <div className="filtered">
                    <div className="flex-center"><AiTwotoneCar className="car-stock"/> <p>No Ver Almacen</p></div>
                    {(stock) ? (<ImCheckboxChecked onClick={toggleStock}/>) : (<ImCheckboxUnchecked onClick={toggleStock}/>)}
                </div>
                <Report className="mt-5"/>
            </section>
            <Footer/>
        </div>
    )
}

export default Reports
