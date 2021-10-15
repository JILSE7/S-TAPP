import React, { useState } from 'react'

import logoReport from '../../Assets/logost.png';

//Ant DatePicker
import { DatePicker, Space } from 'antd';
import { fetchFunction } from '../../Helpers/fetch';




const HeaderReport = ({typeReport, description,located = false}) => {

    
    return (
        <div className="headerReport">
            <div className="flex-center-space">
                <img className="logo" src={logoReport}/>
                <h4>Tipo de Reporte: <span>{ typeReport}</span></h4>
            </div>
            <h5>Descripción: <span>{description}</span></h5>
            
            
        </div>
    )
}

export default HeaderReport
