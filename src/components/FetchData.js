import { useState, useEffect } from 'react';

function FetchData(path) {
    
const [data,setData]=useState(null);


useEffect( ()=> { fetch('http://localhost:8000/'+path)
.then(res => res.json())
.then(data => setData(data))
.catch(error => console.error(error))
},[])
    return(JSON.stringify(data))
}

export default FetchData;