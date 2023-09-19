import React from 'react'
import Navbar from '../Navbar'
import Home from '../Home'
import Cards from "../Cards";
import Places from "../Places";
import Aboutus from "../Aboutus";
import Aboutdev from "../Aboutdev";
import Social from "../Social";


const Login = () => {
  return (
    <div className="Login">
        <Navbar/>
        <Home/>
        <Cards
        imgsrc="./Images/Camerawalebhaiya.jpg" 
        title="Camerawalebhaiya"/>
        <Cards
        imgsrc="./Images/Gaurav.png"  
        title="Gaurav Taneja"/>
        <Cards
        imgsrc="./Images/Nikhil.png"  
        title="Mumbiker Nikhil"/>
        <Cards
        imgsrc="./Images/person.jpg"  
        title="Next who? May be YOU"/>
        <Places/>
        <Aboutus/>
        <Aboutdev/>
        <Social/>
    </div>
  )
}

export default Login