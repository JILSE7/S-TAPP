import React, { useEffect, useState, useContext } from 'react';
//Sweetalert
import Swal from 'sweetalert2';

import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';

//icons
import {RiUploadCloud2Fill} from 'react-icons/ri'
import { uploadData } from '../Helpers/uploadData';
import { useHistory } from 'react-router';

import { StopContext } from '../Store/StoreContext';


const LoadData = () => {    

    const {setnewData} = useContext(StopContext);


    const {push} = useHistory();

    const [file, setFile] = useState(null);
    const [resp, setResp] = useState(false);

    //Manejador de archivo
    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    

    //Manejador click
    const handleClick = (e) => {
        e.preventDefault();
        document.querySelector('#uploadData').click();
    };

    useEffect(() => {
        if(resp){
            Swal.fire({
            title: 'Espere',
            html: 'Mientras la informacion es cargada.....!',
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              
            }
                })
        }else{
            Swal.close();
        }
    }, [resp])

    const handleSubmit = async(e) => {
        e.preventDefault();
        setResp(true);
        const respuesta = await uploadData(file);
        console.log(respuesta);
        if(respuesta){
            setResp(false);
            if(respuesta.ok){
                setnewData(true); // Vuelve a pedir los nuevos datos
                push('/Reports'); // Nos vamos a la pagina de reportes
            }else{

                setTimeout(() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Porfavor verifica lo siguiente en el archivo: 1.-El archivo no tenga cabeceras, 2.-Las fechas esten con guion'
                      })
                }, 300);
            }       
        } 
    }   



    return (
    <div className="container">
            <Header/>
            <section className="load_data">
                <form className="form_load">
                    <label>Seleciona Archivo</label>
                    <input id="uploadData" name="file" onChange = {handleFile} type="file" style={{display: 'none'}}/>
                    <RiUploadCloud2Fill className="icon" onClick={handleClick}/>
                    {
                        file && <label>{file.name}</label>
                    }
                    <button type="submit" 
                            className={(file)? "btn mt-1" :"btn mt-1 btn_inactive"}  
                            disabled ={(file)? false:true }  
                            onClick={handleSubmit}
                            >Subir</button>
                </form>
            </section>
            <Footer/>
    </div>
    )
}

export default LoadData
