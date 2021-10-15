
import React, { useContext, useState } from 'react'
import UseData from '../../Hooks/UseData';
import { StopContext } from '../../Store/StoreContext';
//import UseData from '../../Hooks/getData';
import HeaderReport from './HeaderReport'
import TableLocated from './Located/TableLocated';
import TableLost from './Lost/TableLost';


import TableMSI from './MSI/TableMSI'


const Report = () => {

    //Context
    const {msi, located, lost, isLoading} = useContext(StopContext);

    return (
        <div className="report">
            <div className=" mt-5">
                <HeaderReport 
                    typeReport={"Missing In Action"} 
                    description={"Resumen de unidades que no han reportado las ultimas 24 hrs."}
                />
                
                <TableMSI 
                    data={msi} 
                    comments={"MSI Report"} 
                    isLoading={isLoading}
                />
                
            </div>

            <div className=" mt-6">
                <HeaderReport 
                typeReport={"Located"} 
                description={"Resumen de unidades que volvieron a reportar despues de estar 48hrs perdidas "} 
                
                located={true}/>
              
                <TableLocated data={located} comments={"Located Report"} isLoading={isLoading}  />
              
                        
            </div>
            <div className=" mt-6">
                <HeaderReport 
                typeReport={"Lost"} 
                description={"Resumen de unidades que llevan mas de 24hrs sin reportar"} 
                
                />
              
                <TableLost data={lost} comments={"Lost Report"} isLoading={isLoading}  />
              
                        
            </div>
        </div>
    )
}

export default Report;
