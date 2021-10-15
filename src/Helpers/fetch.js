const baseURL = 'http://172.20.1.36/apiST'

const fetchFunction = (endpoint, data, method = 'GET') =>{

    const url = `${baseURL}/${endpoint}`;
    

    if(method === 'GET'){
        return fetch(url);
    }else{
        return fetch(url, {
            method,
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}


export{
    fetchFunction
}