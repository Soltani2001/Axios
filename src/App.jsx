import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import Delete from "./Delete";
import Put from "./Put";
import api from "./services/config";

function App() {

  const [todos, setTodos] = useState([])

  useEffect(()=>{

    api.get("/todos")
    .then(res => {console.log(res);})

    // axios
    // .get("https://jsonplaceholder.typicode.com/todos")
    // .then(res => setTodos(res.data))
  }, [])

  return ( <>
  {/* <Put /> */}
  {/* <Delete /> */}
  {/* <Post /> */}
    {/* <h1>App: </h1>
    <ul>
    {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul> */}
  </> );
}

export default App;