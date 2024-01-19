import React from "react";
import { Link } from "react-router-dom";

export const HomePage=()=>{
    return(<div>
        <h1>Hello from Home</h1>
        <Link to={'/register'}>Register</Link>
        <Link to={'/login'}>Login</Link>
    </div>)
}