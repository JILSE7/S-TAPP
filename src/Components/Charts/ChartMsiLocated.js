import React, {useEffect, useState } from 'react'

//Ants
import {Modal} from 'antd';

//Chartjs
import {Bar} from 'react-chartjs-2'
import HeaderReport from '../Reports/HeaderReport';
import TableMSI from '../Reports/MSI/TableMSI';
import TableLocated from '../Reports/Located/TableLocated';



const ChartMsiLocated = ({title, labels, data = [], chartData, msi = false, y= false, position = false, chartH}) => {


    //Drawer
    const [visible, setVisible] = useState(false);
    const [drawerData, setdrawerData] = useState({});
    const [type, setType] = useState('');
    const [long, setLong] = useState('');



    useEffect(() => (type === 'Desaparecidos')  ? setLong(drawerData.msi?.length) : setLong(drawerData.located?.length), [drawerData,msi,type]);

    
    
  
    return (
        <div className={(position) ? "text-start left kpi": " text-end rigth kpi"}>
            <div className="flex-center-space" style={{width: "100%"}}>
                <h3 style={{fontWeight:'bold', color:"rgba(255,140,0)"}}>{data && `MSI:${data[0].reduce((p,c) => p+c, 0)}` }</h3>
                <h3 style={{fontWeight: 'bold', color:"#0a7ffb"}}>{data && `Located: ${data[1].reduce((p,c) => p+c, 0)}` }</h3>

            </div>
            <Bar
                data={{ 
                    labels,

                    datasets:[
                        {
                            label: 'Desaparecidos',
                            data: data[0],
                            borderColor: 'rgba(255,140,0)',
                            backgroundColor: 'rgba(255,140,0, 0.2)',
                            borderWidth: 1
                        },
                        {
                            label: 'Localizados',
                            data: data[1],
                            borderColor: '#0a7ffb',
                            backgroundColor: 'rgba(24, 108, 209, 0.3)',
                            borderWidth: 1
                        }

                    ]
            }}

            options={{
                indexAxis: (y)? 'y': '',
                responsive:true,
                events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
                plugins: {
                    legend:{
                        position:'bottom'
                    },
                    title:{
                        display:true,
                        text: title,
                        position:'top'
                    },
                },
                
                onClick: function(c,i) {
                    let e = i[0];

                    if(e){

                        if(this.tooltip.$context.tooltipItems[0].dataset.label  === 'Desaparecidos'){
                            setdrawerData( chartData[0].filter(obj => obj.date === this.data.labels[e.index])[0]);
                            setType('Desaparecidos');
                        }else{
                            setdrawerData( chartData[1].filter(obj => obj.date === this.data.labels[e.index])[0]);
                            setType('Localizados');
                        }
                        
                        setTimeout(() => {setVisible(true)}, 300); 
                    }
                    
                }
            }}
            height = {chartH}
            />
            
                <Modal
                className="modal"
                title="Detalles del reporte"
                centered
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={[]}
                width={1100}
              
             >
              
                     <HeaderReport 
                    typeReport={(type === 'Desaparecidos') ? "Missing In Action" : "Located"} 
                    description={(type === 'Desaparecidos') ? "Resumen de unidades que no han reportado las ultimas 24 hrs.": "Resumen de unidades que volvieron a reportar despues de estar por lo menos 24hrs perdidos" }
                    dl={long}
                    
                />
                
              { (type === 'Desaparecidos') ?  (
                            <TableMSI 
                            data={drawerData.msi} 
                            comments={"MSI Report"} 
                            isLoading={false}
                                />
                        ): 
                        (
                            <TableLocated 
                             data={drawerData.located} 
                             comments={"Located Report"} 
                             isLoading={false}  
                             /> 
                        )    
                }
                  
              
                </Modal> 
               
           
           
            
        </div>
    )
}

export default ChartMsiLocated;

//Colores
// 'rgba(54, 162, 235, 0.2)',
//'rgba(255, 206, 86, 0.2)',
//'rgba(75, 192, 192, 0.2)',
//'rgba(153, 102, 255, 0.2)',
//'rgba(255, 159, 64, 0.2)',
//'rgba(255, 159, 64, 0.2)'


//Border
//'rgba(54, 162, 235, 1)',
//'rgba(255, 206, 86, 1)',
//'rgba(75, 192, 192, 1)',
//'rgba(153, 102, 255, 1)',
//'rgba(255, 159, 64, 1)',
//'rgba(255, 159, 64, 1)'