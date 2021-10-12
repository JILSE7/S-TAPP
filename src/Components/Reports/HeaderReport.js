import React from 'react'

import logoReport from '../../Assets/logost.png';

//Ant DatePicker
import { DatePicker, Space } from 'antd';




const HeaderReport = ({typeReport, description}) => {

    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    return (
        <div className="headerReport">
            <div className="flex-center-space">
                <img className="logo" src={logoReport}/>
                <h4>Tipo de Reporte: <span>{ typeReport}</span></h4>
            </div>
            <h5>Descripcion: <span>{description}</span></h5>
            <DatePicker onChange={onChange} />
            
        </div>
    )
}

export default HeaderReport
