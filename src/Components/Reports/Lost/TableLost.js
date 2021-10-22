import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    TableCaption,
  } from "@chakra-ui/react";

import TableBodyMSI from '../MSI/TableBodyMSI';

const antIcon = <LoadingOutlined style={{ fontSize: 54 }} spin />;

const TableLost = ({data, comments, isLoading}) => {

    

    if(isLoading){
        return(
            <div style={{width:"100%",display:"flex", justifyContent:"center", marginTop:"20px"}}>
                <Spin  indicator={antIcon} />,                                                                                                                           
            </div>
        )
    }
    return (
        <Table variant="striped" className="text-center table_report">
            
            {data.length > 0 && <TableCaption className="text-center">{comments}</TableCaption>}
            <TableCaption></TableCaption>
                  <Thead className="text-center tableHeader">
                    <Tr>
                    <Th>Fecha de generación</Th>
                        <Th isNumeric>Id Servicio</Th>
                        <Th>Producto</Th>
                        <Th>Cliente</Th>
                        <Th >Unidad</Th>
                        <Th >Estatus</Th>
                        <Th >Último evento</Th>
                        <Th >Fecha evento</Th>
                        <Th >Dias Desaparecido</Th>
                    </Tr>
                  </Thead>
                      { data.length > 0 ? 
                            (
                        <Tbody className="text-table font-mon tdTable">{
                                data.map((client,i) => 
                                (<TableBodyMSI 
                                    key={client.H_Id +5}
                                    customer={client.H_Conectivity_Customer} 
                                    unit={client.H_Conectivity_Alias_3_Alias} 
                                    id_service={client.H_Conectivity_Id_Service} 
                                    product={client.H_Conectivity_Alias_1_Product} 
                                    status={client.H_Conectivity_Alias_2_Status} 
                                    last_event={client.H_Conectivity_Event} 
                                    last_event_date={client.H_Conectivity_Event_Date}
                                    date_generation={client.H_Conectivity_Date_Report_Generation}
                                    latitude={client.H_Conectivity_Latitude}
                                    longitude={client.H_Conectivity_Longitude}
                                    lostDays = {client.H_Conectivity_Days_Without_Report}
                                    />))
                            }
                        </Tbody>
                            ) : 
                            (   
                            
                                <TableCaption className="text-center">No Hay Datos Para Mostrar</TableCaption>
                            
                            )
                            }         
                        
                  <Tfoot>
                        
                  </Tfoot>

        </Table>
                
               
    )
}

export default TableLost;