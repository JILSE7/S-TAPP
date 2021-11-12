import React, { createContext, useEffect, useState } from 'react';
import { newStock } from '../Helpers/filterData';
import UseData from '../Hooks/UseData';

export const StopContext = createContext();

export const StopProvider = ({children}) => {

        //HOOK USE DATA
        const {msi, located,lost,isLoading, chartMsi, chartLocated,setIsloading, setDate, dateReport, setnewData} = UseData()

        //Stockt
        const [stock, setStock] = useState(false);

        //DataFiltrada
        const [lostFiltered, setlostFiltered] = useState([]);
        const [locatedFiltered, setlocatedFiltered] = useState([]);

        //pagination
        const [currentPage, setCurrentpage] = useState(0)


        useEffect(() => {

            if(stock){
                setCurrentpage(0);
                console.log('quiero ver el almacen');
            }else{
                setCurrentpage(0);
                setlostFiltered(newStock(lost));
                setlocatedFiltered(newStock(located));
                console.log('no quiero ver el stock');

            }
        }, [stock, located, lost]);

        

    return (
        <StopContext.Provider value={{msi, 
                                      located, 
                                      lost ,
                                      chartMsi,
                                      chartLocated,
                                      isLoading, 
                                      dateReport, 
                                      stock,
                                      currentPage,
                                      lostFiltered, 
                                      locatedFiltered,
                                      setIsloading, 
                                      setDate, 
                                      setStock,
                                      setCurrentpage,
                                      setnewData
                                      }}>
                                        {children}
        </StopContext.Provider>
    )
}

