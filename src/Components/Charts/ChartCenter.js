import {useEffect, useState } from 'react'

//Ants
import {Modal} from 'antd';

//Chartjs
import {Bar} from 'react-chartjs-2'
import HeaderReport from '../Reports/HeaderReport';
import TableMSI from '../Reports/MSI/TableMSI';


const initialState = {
    active: [],
    inactive: [],
    stock: []
}

const ChartCenter = ({title, labels, data = [], y= false, position = false, chartH, stock}) => {
    const [porcentage, setporcentage] = useState(initialState);


    useEffect(() => {
        let aux,aux2,aux3;

        if(data.length> 0){
                aux = data.map(item => item.totalActives);
                aux2 = data.map(item => item.totalInactives);
                aux3 = data.map(item => item.totalStock)
                setporcentage({
                    active:[aux[7],aux[6],aux[5],aux[4],aux[3],aux[2],aux[1],aux[0]],
                    inactive :[aux2[7],aux2[6],aux2[5],aux2[4],aux2[3],aux2[2],aux2[1],aux2[0]],
                    stock: [aux3[7],aux3[6],aux3[5],aux3[4],aux3[3],aux3[2],aux3[1],aux3[0]]
                });            
        };
        
    }, [stock, data]);
    
    //Drawer
    const [visible, setVisible] = useState(false);
    const [drawerData, setdrawerData] = useState([]);
    const [type, setType] = useState('');
    

    


    //useEffect(() => (type === 'Desaparecidos')  ? setLong(drawerData.msi?.length) : setLong(drawerData.located?.length), [drawerData,msi,type]);

    const d = (stock) => {
        
        if(stock){
            return [
                {
                    label: 'Activos',
                    data: porcentage.active,
                    borderColor: '#0a7ffb',
                    backgroundColor: 'rgba(24, 108, 209, 0.3)',
                    borderWidth: 1,
                                
                    
                },
                {
                    label: 'Inactivos',
                    data: porcentage.inactive,
                    borderColor: 'rgba(255,140,0)',
                    backgroundColor: 'rgba(255,140,0, 0.2)',
                    borderWidth: 1,
                    
                    
                    
                },
                {
                    label:  'Almacen',
                    data: porcentage.stock,
                    borderColor: 'rgba(149,150,154)',
                    backgroundColor: 'rgba(149,150,154, 0.2)',
                    borderWidth: 1,
                    
                    
                    
                },
            ]
        }

        return [
            {
                label: 'Activos',
                data: porcentage.active,
                borderColor: '#0a7ffb',
                backgroundColor: 'rgba(24, 108, 209, 0.3)',
                borderWidth: 1,
            },
            {
                label: 'Inactivos',
                data: porcentage.inactive,
                borderColor: 'rgba(255,140,0)',
                backgroundColor: 'rgba(255,140,0, 0.2)',
                borderWidth: 1,
                
                
            },
        ]
    }
    
  
    return (
        <div className={(position) ? "text-start left kpi": " text-end rigth kpi"}>
            <h3 className={(position) ? "ml-5": "mr-5", "active"}>{`Activos: ${data[0] ? data[0].porcentajeActivesWOS : ""}%`}</h3>
            <h3 className={(position) ? "ml-5": "mr-5", "inactive"}>{`Inactivos: ${data[0] ?  data[0].porcentajeInactivesWOS : ""}%`}</h3>
            { stock && <h3 className={(position) ? "ml-5": "mr-5", "stock"}>{`Almacen: ${data[0] ? data[0].porcentajeStock : ""}%`}</h3>}
            <Bar
                data={{ 
                    labels,
                    datasets: d(stock)
            }}
            
            options={{
                
                maintainAspectRatio:true,
                indexAxis: (y)? 'y': '',
                responsive:true,
                
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
                scales: {
                    x:{
                        stacked:true
                    },
                    y:{
                        stacked:true,
                    }
                },
                
                
    
                
                onClick: function(c,i) {
                    let e = i[0];

                    if(e){

                        //this.tooltip.$context.tooltipItems[0].dataset.label;

                        if(this.tooltip.$context.tooltipItems[0].dataset.label === 'Activos'){
                            setType('Activos');
                            setdrawerData(data.filter(item => item.date === this.data.labels[e.index])[0].actives);
                            
                        }else if(this.tooltip.$context.tooltipItems[0].dataset.label === 'Inactivos'){
                            setType('Inactivos');
                            setdrawerData(data.filter(item => item.date === this.data.labels[e.index])[0].inactives);
                            
                        }else if(this.tooltip.$context.tooltipItems[0].dataset.label === 'Almacen'){
                            setType('Almacen');
                            setdrawerData(data.filter(item => item.date === this.data.labels[e.index])[0].stock);
                            
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
                    typeReport={type} 
                    description={(type === 'Activos') ? "Resumen de unidades reportando": (type === 'Inactivos') ? "Resumen de unidades inactivas" : "Resumen de unidades en almacen" }
                    dl={drawerData.length}
                    
                />
                

                            <TableMSI 
                            data={drawerData} 
                            comments={"MSI Report"} 
                            isLoading={false}
                                />



                  
              
                </Modal> 
               
           
           
            
        </div>
    )
}

export default ChartCenter;
