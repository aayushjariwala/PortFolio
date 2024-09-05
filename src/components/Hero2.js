import "./Hero2Styles.css";
import React from 'react';


const Hero2 = (props)=>{
    return(

        <div className="hero-img">
                <div className="heading">
                <h1>
                    {props.heading}
                </h1>
                <br/>

                <p>
                {props.text}
                </p>
                </div>
        </div>
    )
}

export default Hero2;