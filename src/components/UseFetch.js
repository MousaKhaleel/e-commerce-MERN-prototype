import { useState, useEffect } from 'react';

function useFetch(path) {
    
const [data,setData]=useState();


useEffect( ()=> {
fetch('http://localhost:8000/'+path)
    .then(res => res.json())
        .then(data => setData(data))
    .catch(error => console.error(error))
},[path])
    return{data}
}

export default useFetch;