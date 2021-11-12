import React, {useEffect, useState } from 'react'

//Ants
import {Modal} from 'antd';

//Chartjs
import {Bar} from 'react-chartjs-2'
/* import HeaderReport from '../Reports/HeaderReport';
import TableMSI from '../Reports/MSI/TableMSI';
import TableLocated from '../Reports/Located/TableLocated'; */



const BarHorizontalComponent = ({title, labels, data, y= false, position = false}) => {

    //console.log(data);

   /*  //Drawer
    const [visible, setVisible] = useState(false);
    const [drawerData, setdrawerData] = useState({date: '', msi: []});
    const [long, setLong] = useState(0);



    useEffect(() => (msi) ? setLong(drawerData.msi.length) : setLong(drawerData.located?.length), [drawerData,msi]);
     */
  
    return (
        <div className={(position) ? "text-start left kpi": " text-end rigth kpi"}>
            <h3 className={(position) ? "ml-5": "mr-5"}>{data && data[7]}</h3>
            <Bar
                data={{ 
                    labels,
                    
                    datasets: [{
                    label: 'Causas Principales',
                    data: data,
                    backgroundColor: [
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(153, 102, 255, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(153, 102, 255, 1)',
                    
                    ],
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
                        
                     /*    setdrawerData( chartData.filter(obj => obj.date === this.data.labels[e.index])[0]);

                        
                        setTimeout(() => {setVisible(true)}, 300); */
                    }
                    
                }
            }}
            height={"250"}
            />
            
              
           
            
        </div>
    )
}

export default BarHorizontalComponent;
