import React, {useState} from 'react'
import { Bar } from 'react-chartjs-2';


const BarComponentTime = ({title, labels, data = [], y= false, position = false, chartH, stock}) => {

    
    
    return (
        <div className={(position) ? "text-start left kpi hola": " text-end rigth kpi hola"}>
            <h3 className={(position) ? "ml-5": "mr-5", "active"}>{}</h3>
            <h3 className={(position) ? "ml-5": "mr-5", "inactive"}>{}</h3>
            <h3 className={(position) ? "ml-5": "mr-5", "stock"}>{}</h3>
            <Bar
                data={{ 
                    labels,
                    datasets: [{
                        label: 'Tiempo Promedio - Dias',
                        data: data.map(item => item.Average),
                        borderColor: 'rgba(255,140,0)',
                        backgroundColor: 'rgba(255,140,0, 0.2)',
                        borderWidth: 1
                    }]
                    
            }}
            
            options={{
                maintainAspectRatio:true,
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
            }}
            height = {chartH}
            />
            {/* 
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
                    typeReport={type} 
                    description={(type === 'Activos') ? "Resumen de unidades reportando": (type === 'Inactivos') ? "Resumen de unidades inactivas" : "Resumen de unidades en almacen" }
                    dl={drawerData.length}
                    
                />
                

                            <TableMSI 
                            data={drawerData} 
                            comments={"MSI Report"} 
                            isLoading={false}
                                />



                  
              
                </Modal>  */}
               
           
           
            
        </div>
    )
}

export default BarComponentTime
