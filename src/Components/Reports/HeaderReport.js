
import React, { useContext } from 'react';


import {MdOutlineNavigateNext, MdOutlineNavigateBefore} from 'react-icons/md'

import logoReport from '../../Assets/logost.png';
import { StopContext } from '../../Store/StoreContext';






const HeaderReport = ({typeReport, description,dl, paginate = false, filtered = false,setFiltered = false}) => {

    const {stock, lost, lostFiltered} = useContext(StopContext);

    const nextPage = () => {
        if(stock){
            if(lostFiltered.length > filtered + 15){
                setFiltered(filtered + 15 );
            }
        }else{
            if(lost.length > filtered + 15){
                setFiltered(filtered + 15 );
            }
        }
    }

    const prevPage = () => {
        if(filtered >0){
            setFiltered(filtered - 15 );
        }
    }

    
    return (
        <div className="headerReport">
            <div className="flex-center-space">
                <img className="logo" src={logoReport}/>
                <h4>Tipo de Reporte: <span>{ typeReport + " " + dl}</span></h4>
            </div>
            <h5>Descripción: <span>{description}</span></h5>            
            
            {
                paginate && 
                <div className="headerButtons flex-center">
                    <MdOutlineNavigateBefore onClick={prevPage} className="btn"/>
                    <p>{`${filtered} - ${filtered + 15}`}</p>
                    <MdOutlineNavigateNext onClick={nextPage} className="btn"/>
                </div>
            }
            
        </div>
    )
}

export default HeaderReport
