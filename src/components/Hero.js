import "./HeroStyles.css";
import React from 'react';
import introImg from "../assets/smooth-elegant-transparent-blue-cloth-separated-blue.jpg"
import {Link} from 'react-router-dom';
const Hero = ()=>{
    return(
        <>
        
       <div className="hero">

        <div className="mask">
            <img className = "intro-img" src={introImg} />
        </div>

        <div className="content">
            <p>Hello, I'M A FREELANCER</p>
            <h1>FULL STACK DEVELOPER</h1>

            <div>
            <Link to="/Project" className="btn"><span>Projects</span></Link>
            <Link to="/Contact" className="btn">Contact</Link>
        </div>
        </div>
       
       </div>
        </>
    )
}

export default Hero;