import React, { createContext } from 'react';
import UseData from '../Hooks/UseData';

export const StopContext = createContext();

export const StopProvider = ({children}) => {

        //HOOK USE DATA
        const {msi, located,lost, isLoading, setIsloading, setDate, dateReport} = UseData()


    return (
        <StopContext.Provider value={{msi, located, lost ,isLoading, setIsloading, setDate, dateReport}}>
            {children}
        </StopContext.Provider>
    )
}

