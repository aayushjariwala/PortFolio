import "./WorkCardStyles.css";
import React from 'react'
import { NavLink } from "react-router-dom";


const WorkCard = (props) => {

    return (

      
                <div className="project-card">
                    <img src={props.imgsrc} alt="" />
                    <h2 className="project-title">{props.title}</h2>
                    <div className="project-details">
                        <p>{props.text}</p>
                        <div className="project-btn">
                            <NavLink to={props.view} className="card-btn">View</NavLink>
                            <NavLink to="url.com" className="card-btn">Source</NavLink>
                        </div>
                    </div>
                </div>

               


                



            
    )
}

export default WorkCard;