import { Modal } from 'antd';
import { Bar } from 'react-chartjs-2';
import UseDrawer from '../../Hooks/UseDrawer';
import HeaderReport from '../Reports/HeaderReport';
import TableLost from '../Reports/Lost/TableLost';



const ChartTimeAverage = ({title, labels, data = [], y= false, position = false, chartH}) => {

    const {visible,setVisible,drawerData,setdrawerData,type} = UseDrawer();
    return (
        <div className={(position) ? "text-start left kpi hola": " text-end rigth kpi hola"}>
            <h3 className={(position) ? "ml-5": "mr-5 active"}>{}</h3>
            <h3 className={(position) ? "ml-5": "mr-5 inactive"}>{}</h3>
            <h3 className={(position) ? "ml-5": "mr-5 stock"}>{}</h3>
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
                 
                onClick: function(c,i) {
                    let e = i[0];

                    if(e){
                        
                        setdrawerData(data.filter(item => item.date == this.tooltip.$context.tooltipItems[0].label)[0].data);
                        
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
                width={1350}
              
             >
              
                     <HeaderReport
                    typeReport={type} 
                    description={"Resumen del tiempo promedio de unidades sin reportar"}
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

export default ChartTimeAverage
