import axios from "axios";
import { useState } from "react";

function Post() {

    const [name, setName] = useState("")

    // axios
    const postHandeler =()=>{
        axios
        .post('https://jsonplaceholder.typicode.com/todos', {name})
        .then(res => console.log(res))
    }

    return ( <>
    <input 
        type="text" 
        value={name} 
        onChange={(e => setName( e.target.value))} />
    <button onClick={postHandeler}>Post</button>
    </> );
}

export default Post;