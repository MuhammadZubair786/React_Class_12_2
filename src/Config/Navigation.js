
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import User from '../components/User'
import UserElement from '../components/user_Data_Elemnt'
import User_Render from "../components/User_Render";

function Navigation(){
    return(
        <>
        <h1>router Class</h1>
        <Routes>
            <Route path="/about"   element={<About/>} /> 
            <Route path="/"   element={<Home/>} />
            <Route path="/User"   element={<User/>} />
            <Route path="/User/:name" element={<User_Render/>}/>
            <Route path="/User/:name/:d2" element={<UserElement/>}/>
            <Route path="*" element={<h1>404 Error</h1>}/>

        </Routes>
        </>
    )
}

export default Navigation