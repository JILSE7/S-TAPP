

export const uploadData = async(file) => {

    //AGREGANDO EL ARCHIVO A LA PETICION
    const formData = new FormData();

    formData.append('file', file);

    try {
        const respuesta = await (await fetch("http://172.20.1.36/apiST/Routes/Test.php",{
            method:"POST",
            body: formData
        })).json();

        return respuesta;
    } catch (error) {

        const resp = await (await fetch("http://172.20.1.36/apiST/Routes/Delete.php")).json()
        return {
            ok:false,
            msg: "Hubo un error",
            info: resp.msg
        }
    }

}