import React, { useEffect, useState } from 'react';
import axios from 'axios'
const DataFetchComp = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState('');

    useEffect( ()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts/5')
        .then(res => {
            setLoading(false);
            setData(res.data);
        })
        .catch(err => {
            setLoading(false);
            setError(err)
        })
    }, [])

    return(
        <div>
            {loading ? <h1>Loading ...............</h1> : <h1>Title : {data.title}</h1>}
            {!!error && <h1>error : {error.message}</h1>}
        </div>
    )
}

export default DataFetchComp;