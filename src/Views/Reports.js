import React, { useContext, useState } from 'react';

//Ant
import { DatePicker } from 'antd';
//Datefsn
import { format } from 'date-fns';
//ICONS
import {GiHomeGarage} from 'react-icons/gi';
//Context
import { StopContext } from '../Store/StoreContext'
//Componets
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer';
import Report from '../Components/Reports/Report'
import UseChart from '../Hooks/UseChart';
import BarComponentCenter from '../Components/Charts/BarComponent';
import BarHorizontalComponent from '../Components/Charts/BarHorizontalComponent';
import BarComponent2chart from '../Components/Charts/BarComponent2chart';
import BarComponentTime from '../Components/Charts/BarComponentTime';



const Reports = () => {

    
    
    //Context
    const {setDate, dateReport, stock, setStock, chartPorcent, chartTime} = useContext(StopContext);
    
    //Custom-Hook
    const {labels,chartFiltered, chartLost} = UseChart();
    
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
                <div className="date flex-center-space">
                    
                        <h2>Fecha de Reportes: {dateReport ? dateReport : format(new Date(), "yyyy-MM-dd")} </h2>
                        <DatePicker onChange={onChange} />
                        <div className="flex-center align-end"><GiHomeGarage 
                             className={ (stock) ? "car-stock car-stock-active" : "car-stock"} 
                             onClick={toggleStock}/> <p>Almacen</p>
                        </div>
                </div>
                
              
                <section className="charts">
                    <div className="chart-center animate__animated animate__fadeInDownBig" >
                    <BarComponentCenter  labels={labels} data={chartPorcent} stock={stock} chartH={200}/>
                    </div>
                    <div className="chart-seccion">
                        <div className="chart-item borderBottom animate__animated animate__backInLeft">
                            <BarComponent2chart title={'MSI/LOCATED'} labels={labels} data={[chartFiltered.msi.labels, chartFiltered.located.labels]} chartData={[chartFiltered.msi.data, chartFiltered.located.data]} chartH={250} />
                        </div>
                        <div className="chart-item animate__animated animate__backInLeft">
                          <BarHorizontalComponent  y={true} title={'Causas Principales'} data={chartLost.data} arr={chartLost.arr} y={true}/> 
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div className="chart-seccion">
                        <div className="chart-item borderBottom animate__animated animate__backInRight">
                            {/* <BarComponent position={true} title={'Localizados'} labels={labels} data={cLocated} chartData={chartLocated}/> */}
                        </div>
                        <div className="chart-item" >
                            <BarComponentTime  position={true} title={'Tiempo Promedio'} labels={labels} data={chartTime}/>
                        </div>
                    </div>
                   
                </section>
               
                
            </main>
            <section className="reports">
                <Report className="mt-5"/>
            </section>
            <Footer/>
    
        </div>
    )
}

export default Reports
