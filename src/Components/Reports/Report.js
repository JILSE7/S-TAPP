
import React, { useContext} from 'react'
import { StopContext } from '../../Store/StoreContext';
//import UseData from '../../Hooks/getData';
import HeaderReport from './HeaderReport'
import TableLocated from './Located/TableLocated';
import TableLost from './Lost/TableLost';


import TableMSI from './MSI/TableMSI'


const Report = () => {


   
    //Context
    const {msi, located, lost, isLoading, lostFiltered, locatedFiltered,stock, currentPage, setCurrentpage} = useContext(StopContext);

    const filteredLost = () => {
            if(!stock){
                return lostFiltered.slice(currentPage,currentPage + 15);
            }else{
                return lost.slice(currentPage,currentPage + 15);
            }       
    }

    return (
        <div className="report">
            <div className=" mt-5">
                <HeaderReport 
                    typeReport={"Missing In Action"} 
                    description={"Resumen de unidades que no han reportado las ultimas 24 hrs."}
                    dl={msi.length}
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
                description={"Resumen de unidades que volvieron a reportar despues de estar por lo menos 24hrs perdidos "} 
                dl={(stock)? located.length : locatedFiltered.length}
                located={true}/>
              
                <TableLocated data={(stock)? located : locatedFiltered} comments={"Located Report"} isLoading={isLoading}  />
              
                        
            </div>
            <div className=" mt-6">
                <HeaderReport 
                typeReport={"Lost"} 
                description={"Resumen de unidades que llevan mas de 24hrs sin reportar"} 
                paginate
                filtered={currentPage}
                setFiltered={setCurrentpage}
                numberData={lost.length}
                dl={(stock)? lost.length : lostFiltered.length}
                />
              
                <TableLost data={filteredLost()} comments={"Lost Report"} isLoading={isLoading}  />
              
                        
            </div>
        </div>
    )
}

export default Report;
