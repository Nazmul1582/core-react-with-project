import React, {useState, useEffect} from 'react';
import axios from 'axios';
const DataFetch = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fectData(){
            // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // setData(res.data)
        }
        fectData()
    }, [])

    const fetchDataHandler = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(res.data);
    }
    return(
        <div>
            <button onClick={()=> fetchDataHandler()}>Show Data </button>
            {
                data.map(ele => (
                    <p key={ele.id}>Title-{ele.id} : {ele.title} </p>
                ))
            }
        </div>
    )
}
export default DataFetch;