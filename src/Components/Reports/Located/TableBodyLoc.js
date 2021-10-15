import React from 'react';
import {Tr, Td} from "@chakra-ui/react";

const TableBodyLoc = ({date_generation,product,customer, unit,status, id_service, last_event, last_event_date, ds, latitude, longitude}) => {
    return (
        <Tr className="text-table font-mon tdTable">
        <Td className="animate__animated animate__flash" >{date_generation}</Td>
        <Td className="animate__animated animate__flash" ><a href={`http://crm.avicars.app/index.php?action=UnifiedSearch&module=Home&search_form=false&advanced=false&query_string=${id_service}`} target="_blank">{id_service}</a></Td>
        <Td className="animate__animated animate__flash">{product}</Td>
        <Td className="animate__animated animate__flash">{customer}</Td>
        <Td className="animate__animated animate__flash">{unit}</Td>
        <Td className="animate__animated animate__flash">{(status)? status : "Sin Status Registrado"}</Td>
        <Td className="animate__animated animate__flash"><a href={`http://www.google.com/maps/place/${latitude},${longitude}`} target="_blank">{last_event}</a></Td>
        <Td className="animate__animated animate__flash">{last_event_date}</Td>
        <Td className="animate__animated animate__flash" >{ds}</Td>
        
    </Tr>
    )
}

export default TableBodyLoc
