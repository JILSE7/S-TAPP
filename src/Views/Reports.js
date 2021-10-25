import React, { useContext, useState } from 'react';

//Ant
import { DatePicker } from 'antd';

//Componets
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer';
import Report from '../Components/Reports/Report'
import { StopContext } from '../Store/StoreContext'
import UseChart from '../Hooks/UseChart';

//ICONS
import {ImCheckboxChecked,ImCheckboxUnchecked} from 'react-icons/im';
import {AiTwotoneCar} from 'react-icons/ai';
import { format } from 'date-fns';
import PieComponent from '../Components/Charts/Pie';
import PieRechart from '../Components/Charts/PieRechart';



const Reports = () => {

    //Context
    const {setDate, dateReport, stock, setStock} = useContext(StopContext);

    //Custom-Hook
    const {total , val, labels, data} = UseChart();
   
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
            <main className="reports">
                <div className="date">
                        <h1>Fecha de Reportes: {dateReport ? dateReport : format(new Date(), "yyyy-MM-dd")} </h1>
                        <DatePicker onChange={onChange} />
                </div>
                <div className="filtered">
                    <div className="flex-center"><AiTwotoneCar className="car-stock"/> <p>No Ver Almacen</p></div>
                    {(stock) ? (<ImCheckboxChecked onClick={toggleStock}/>) : (<ImCheckboxUnchecked onClick={toggleStock}/>)}
                </div>
                <div className="charts">
                    <div>
                        <PieComponent labels={labels} total={total} val={val}/>
                    </div>
                    <div>
                        <PieRechart data={data}/>
                    </div>
                   
                </div>
            </main>
            <section className="reports">
                <Report className="mt-5"/>
            </section>
            <Footer/>
        </div>
    )
}

export default Reports
