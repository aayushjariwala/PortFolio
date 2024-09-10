import "./NavbarStyles.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(true);
    const [color, setColor] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect scroll to change background color
    const changeColor = () => {
        if (window.scrollY >= 10) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

    // Toggle menu
    const handleClick = () => {
        setClick(!click);
    };

    // Detect screen size to toggle between full title and short title
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1040); // Set to true if screen is smaller than 1040px
        };

        window.addEventListener("resize", handleResize);

        // Initial check
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className={color ? "header-bg" : "header"}>
                <Link to="/Home">
                    <h1>{isMobile ? "AJ" : "THEAAYUSHJARIWALA"}</h1>
                </Link>

                <ul className={click ? "nav-menu" : "nav-menu active"}>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Project">Project</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>

                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaBars size={20} style={{ color: "#fff" }} />
                    ) : (
                        <FaTimes size={20} style={{ color: "#fff" }} />
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
