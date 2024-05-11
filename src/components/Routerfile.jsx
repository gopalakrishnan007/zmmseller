import {  Routes, Route } from "react-router-dom";
import SignIn from "./Signin";
import Form from "./Form";



export default function Routerfile(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>} ></Route>
            <Route path="/form" element={<Form/>}></Route>
        </Routes>
    )
}