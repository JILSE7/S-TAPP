
import React from 'react'
//import UseData from '../../Hooks/getData';
import HeaderReport from './HeaderReport'




const Report = () => {

    //const {msi, located, isLoading} = UseData();

    //console.log(msi, located, isLoading);

    return (
        <div className="report">
            <div className=" mt-5">
                <HeaderReport typeReport={"Missing In Action"} description={"Resumen de las unidades que dejaron de reportar"}/>
                
            </div>

            <div className=" mt-6">
                <HeaderReport typeReport={"Missing In Action"} description={"Resumen de las unidades que dejaron de reportar"}/>
                
            </div>
        </div>
    )
}

export default Report;
