import React, { useContext, useEffect, useState } from 'react';

//Ant
import { DatePicker,Tooltip, Modal } from 'antd';
//React-switch
import Switch from "react-switch";
//Datefsn
import { format } from 'date-fns';
//ICONS
import {FcInTransit,FcLock} from 'react-icons/fc';
//Context
import { StopContext } from '../Store/StoreContext'
//Componets
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer';
import Report from '../Components/Reports/Report'
import UseChart from '../Hooks/UseChart';
import BarComponentCenter from '../Components/Charts/ChartCenter'
import BarComponent2chart from '../Components/Charts/ChartMsiLocated';
import ChartTimeAverage from '../Components/Charts/CharTimeAverage';
import ChartMainCauses from '../Components/Charts/ChartMainCauses';
import ChartMsiLocated from '../Components/Charts/ChartMsiLocated';
import ChartCenter from '../Components/Charts/ChartCenter';
//CustomHooks
import UseDrawer from '../Hooks/UseDrawer';
import HeaderReport from '../Components/Reports/HeaderReport';
import TableLost from '../Components/Reports/Lost/TableLost';



const Reports = () => {
    
    //Context
    const {setDate, dateReport, stock, setStock, chartPorcent, chartTime} = useContext(StopContext);
    
    
    //Custom-Hook
    const {labels,chartFiltered, chartLost} = UseChart();
    const {visible,setVisible,drawerData,setdrawerData} = UseDrawer();
    
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

    useEffect(() => {
        if(chartPorcent[0]){
            setdrawerData(chartPorcent[0].accesoCerrado)
        }
    }, [chartPorcent, setdrawerData])
    
    

    return (
        <div className="container">
            <Header/>
            <main className="reports">
                <div className="date flex-center-space">

                        <h2>Fecha de Reportes: {dateReport ? dateReport : format(new Date(), "yyyy-MM-dd")} </h2>
                        <DatePicker onChange={onChange} />

                        <div className='options'>
                            <div>
                                <FcLock size={"2em"} onClick={()=> setVisible(true)}/>
                                <Tooltip title="El acceso cerrado son aquellas unidades que ya no se encuentras activas en la plataforma
                                                y estan conformadas por unidades con status cancelado, suspendido, robado y siniestrado. 
                                                Da click en el candado para ver"
                                placement="bottom"
                                >
                                <p>Acceso Cerrado</p>
                                </Tooltip>
                            </div>
                            
                            <div style={{display:"flex", flexDirection:"column" , alignItems:"center"}}>
                                <Tooltip title={(stock)? "¿Quieres excluir el almacen?" : "¿Quieres incluir el almacen?"}>
                                    <FcInTransit 
                                    className={ (stock) ? "car-stock car-stock-active" : "car-stock"}/>
                                    <p>Almacen</p>
                                    <Switch onChange={toggleStock} checked={stock} height={18} onColor={"#1a8906"} offColor={"#cd6f04"} handleDiameter={15}/>
                                </Tooltip>
                            </div>

                        </div>
                </div>
                
              
                <section className="charts">
                    <div className="chart-center animate__animated animate__fadeInDownBig" >
                    <ChartCenter  labels={labels} data={chartPorcent} stock={stock} chartH={200}/>
                    </div>
                    <div className="chart-seccion">
                        <div className="chart-item borderBottom animate__animated animate__backInLeft">
                            <ChartMsiLocated title={'MSI/LOCATED'} labels={labels} data={[chartFiltered.msi.labels, chartFiltered.located.labels]} chartData={[chartFiltered.msi.data, chartFiltered.located.data]} chartH={250} />
                        </div>
                        <div className="chart-item animate__animated animate__backInLeft">
                          <ChartMainCauses  y={true} title={'Causas Principales'} data={chartLost.data} arr={chartLost.arr} y={true}/> 
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div className="chart-seccion">
                        <div className="chart-item borderBottom animate__animated animate__backInRight">
                            {/* <BarComponent position={true} title={'Localizados'} labels={labels} data={cLocated} chartData={chartLocated}/>  */}
                        </div>
                        <div className="chart-item" >
                            <ChartTimeAverage  position={true} title={'Tiempo Promedio'} labels={labels} data={chartTime}/>
                        </div>
                    </div>
                   
                </section>
            </main>
            <section className="reports">
                <Report className="mt-5"/>
            </section>
            <Footer/>
            <Modal
                className="modal"
                title="Detalles del reporte"
                centered
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={[]}
                width={1350}
              
             >
                <HeaderReport
                    typeReport={"Acceso Cerrado"} 
                    description={"Unidades en Acceso Cerrado"}
                    dl={drawerData.length}
                    
                />
                

                <TableLost
                            data={drawerData} 
                            comments={"MSI Report"} 
                            isLoading={false}
                                />

                  
              
                </Modal> 
        </div>
    )
}

export default Reports
