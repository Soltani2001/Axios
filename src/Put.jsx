import axios from "axios";
import { useState } from "react";

function Put() {

    const [id, setId] = useState("")
    const [title, setTitle] = useState("")

    // axios
    const uploadHandeler =()=>{
        axios
        .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {title})
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

    return ( <>
    <input 
        type="text" 
        value={id} 
        onChange={(e => setId( e.target.value))} />

<input 
        type="text" 
        value={title} 
        onChange={(e => setTitle( e.target.value))} />

    <button onClick={uploadHandeler}>patch</button>
    </> );
}

export default Put;