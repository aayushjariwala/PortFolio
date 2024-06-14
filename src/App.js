import React from 'react'; 
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import {Route, Routes } from 'react-router-dom';



function App() {
  return (
   
    <>
     <Routes>

        <Route path="/Home" element={<Home/>} / >
        <Route path="/Project" element={<Project/>} />
        <Route path="/Contact" element={<Contact/>} / >
        <Route path="/About" element={<About/>} / >
          

      </Routes>
    
    </>
  )
}

export default App;
