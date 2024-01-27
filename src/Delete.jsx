import axios from "axios";
import { useState } from "react";

function Delete() {

    const [id, setId] = useState("")

    // axios
    const deletetHandeler =()=>{
        axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => console.log(res))
    }

    return ( <>
    <input 
        type="text" 
        value={id} 
        onChange={(e => setId( e.target.value))} />
    <button onClick={deletetHandeler}>delete</button>
    </> );
}

export default Delete;