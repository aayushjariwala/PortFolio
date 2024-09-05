import "./AboutContentStyles.css";
import {Link } from 'react-router-dom';
import React from 'react'
import image from '../assets/Premium Vector _ Young programmer code for client projects developer writing program code flat vector.jpeg';



 const AboutContent = () => {
  return (
    <>
        <div className="about">


            <div className="left">
                <h1>Who am I ?</h1>
                <p>This is paragraph </p>
                <Link to="/contact" className="btn">CONTACT</Link>
            </div>

            

            <div className="right">
                    <div className="img-container">
                        <div className="top">
                            <img src={image} className="img" alt="true"/> 
                        </div>
                        <div className="bottom">
                            <img src={image} className="img" alt="true"/> 
                        </div>
                        
                    </div>
            </div>


        </div>
     
    </>
  )
}

export default AboutContent;

