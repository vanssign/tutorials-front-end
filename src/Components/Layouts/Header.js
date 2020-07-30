import React, { Component } from 'react';
import { Link } from 'react-router-dom'

 function Header(){
     return(
         <header style={headerStyle}>
             <h1>To Do list</h1>
             <p>Based on Reactjs</p>
             <Link style={{color:"white"}} to="/">Home </Link> | 
             <Link style={{color:"white"}} to="/about">About </Link>
         </header>
     )
 }
 const headerStyle={
     textAlign:'center',
     background:'black',
     color:'white',
     
 };
 export default Header;
