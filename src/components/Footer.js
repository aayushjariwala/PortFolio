import "./FooterStyles.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (

        <>
            <div className="footer">

                <div className="footer-container">

                    <div className="left">
                        <div className="location">

                            <p>
                                <FaHome size={20} style={{ color: "#fff", marginRight: '2rem' }} />

                                151 Bridgeport Road East,
                                waterloo, CA N2J2K3

                            </p>


                        </div>
                        <br />

                        <div className="phone">
                            <h4>
                                <FaPhone size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                                +1 548-333-0258

                            </h4>
                        </div>


                        <div className="email">
                            <h4>
                                <FaMailBulk size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                                aayushjariwala88@gmail.com

                            </h4>
                        </div>
                    </div>
                    <div className="right">
                        <h4>About the company</h4>
                        <p>
                            This is Aayush jariwala CEO & founder of A-Tech.
                            I enjoy all kind of projects and challenges.
                            This is Aayush jariwala CEO & founder of A-Tech.
                            I enjoy all kind of projects and challenges.
                        </p>


                        <br /><br /><br /><br />


                    </div>





                </div>
                <br />
                <div className="last-footer">

                    <div className="social">

                        <FaFacebook size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                        <FaInstagram size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                        <FaLinkedin size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                    </div>
                    <br />
                    <div className="copyright">
                        <p>Copyright 2024 Aayush jariwala | All rights recieved</p>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Footer;