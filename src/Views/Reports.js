import React, { useContext } from 'react';

//Ant
import { DatePicker } from 'antd';

//Componets
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer';
import Report from '../Components/Reports/Report'
import { StopContext } from '../Store/StoreContext'
import UseChart from '../Hooks/UseChart';

//ICONS
import {GiHomeGarage} from 'react-icons/gi';
import { format } from 'date-fns';
import BarComponent from '../Components/Charts/BarComponent';
import BarHorizontalComponent from '../Components/Charts/BarHorizontalComponent';



const Reports = () => {

    //Context
    const {setDate, dateReport, stock, setStock} = useContext(StopContext);

    //Custom-Hook
    const {labels, cReason, cReasonLabels, chartFiltered, chartLost} = UseChart();

    
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
                    <div className="chart-center">
                    <BarComponent  y={true} labels={labels}/>
                    </div>
                    <div className="chart-seccion">
                        <div className="chart-item borderBottom">
                            <BarComponent title={'MSI/LOCATED'} labels={labels} data={[chartFiltered.msi.labels, chartFiltered.located.labels]} chartData={[chartFiltered.msi.data, chartFiltered.located.data]} chartH={250} />
                        </div>
                        <div className="chart-item">
                            <BarHorizontalComponent  y={true} title={'Causas Principales'} data={chartLost.data} arr={chartLost.arr} y={true} />
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div className="chart-seccion">
                        <div className="chart-item borderBottom ">
                            {/* <BarComponent position={true} title={'Localizados'} labels={labels} data={cLocated} chartData={chartLocated}/> */}
                        </div>
                        <div className="chart-item">
                            <BarComponent  y={true} position={true} title={'Tiempo Promedio'}  chartH={330}/>
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
