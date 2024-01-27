import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'

axios.interceptors.request.use((request)=>{
    request.headers.Authorization = "token";
    console.log(`${request.method} sent to ${request.url}`);
    return request;
}, erroe => {console.log(erroe)
    return Promise.reject.erroe
})


ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
