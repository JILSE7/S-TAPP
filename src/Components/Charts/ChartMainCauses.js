import React, {useEffect, useState } from 'react'

//Ants
import {Modal} from 'antd';

//Chartjs
import {Bar} from 'react-chartjs-2'
import TableLost from '../Reports/Lost/TableLost';
import HeaderReport from '../Reports/HeaderReport';




const ChartMainCauses = ({title, data,arr, y= false, position = false}) => {

    //Drawer
    const [visible, setVisible] = useState(false);
    const [drawerData, setdrawerData] = useState([]);
    const [long, setLong] = useState(0);
    const [titleLost, setTitleLost] = useState('')

/*     console.log(data.map(item => item.value));
    console.log(data.map(item => item.status)); */

    useEffect(() => setLong(drawerData.length), [drawerData]);
    
    return (
        <div className={" text-end rigth kpi"}>
            {/* <h3 className={"mr-5"}>{data && data[7]}</h3> */}
            <Bar
                data={{ 
                    labels: data.map(item => item.status),
                    datasets: [{
                    label: 'Causas Principales',
                    data: data.map(item => item.value),
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
                layout: {
                    autoPadding: true
                },
                
                
                onClick: function(c,i) {
                    let e = i[0];

                    if(e){
                        console.log(this.data.datasets);
                        const causa = this.data.labels[e.index];
                        setTitleLost(causa)
                        setdrawerData(arr.filter(item => item.status === causa)[0].value);
                        setTimeout(() => {setVisible(true)}, 300); 
                    }
                    
                }
            }}
            height={"270"}
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

export default ChartMainCauses;
