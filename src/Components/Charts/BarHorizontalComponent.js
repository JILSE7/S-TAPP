import React, {useEffect, useState } from 'react'

//Ants
import {Modal} from 'antd';

//Chartjs
import {Bar,Doughnut} from 'react-chartjs-2'
import TableLost from '../Reports/Lost/TableLost';
import HeaderReport from '../Reports/HeaderReport';
/* import HeaderReport from '../Reports/HeaderReport';
import TableMSI from '../Reports/MSI/TableMSI';
import TableLocated from '../Reports/Located/TableLocated'; */



const BarHorizontalComponent = ({title, data,arr, y= false, position = false}) => {

    console.log(arr);
    

    //Drawer
    const [visible, setVisible] = useState(false);
    const [drawerData, setdrawerData] = useState([]);
    const [long, setLong] = useState(0);
    const [titleLost, setTitleLost] = useState('')



    useEffect(() => setLong(drawerData.length), [drawerData]);
    
    console.log(drawerData);
    return (
        <div className={(position) ? "text-start left kpi": " text-end rigth kpi"}>
            <h3 className={(position) ? "ml-5": "mr-5"}>{data && data[7]}</h3>
            <Bar
                data={{ 
                    labels: Object.keys(data),
                    
                    datasets: [{
                    label: 'Causas Principales',
                    data: Object.values(data),
                    borderColor: 'rgba(234, 39, 4)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
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
                layout: {
                    autPadding: true
                },
                
                
                onClick: function(c,i) {
                    let e = i[0];

                    if(e){
                        console.log(this.data.datasets);
                        const causa = this.data.labels[e.index];
                        setTitleLost(causa)
                        setdrawerData(arr[causa]);

                        
                        setTimeout(() => {setVisible(true)}, 300);
                    }
                    
                }
            }}
            height={"350"}
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
                    typeReport={'LOST'} 
                    description={`Resumen de unidades que llevan mas de 24hrs sin reportar - ${titleLost}` }
                    dl={long}
                    
                />
                <TableLost data={drawerData} comments={"Lost Report"} isLoading={false}  />
              
                </Modal> 
           
            
        </div>
    )
}

export default BarHorizontalComponent;
