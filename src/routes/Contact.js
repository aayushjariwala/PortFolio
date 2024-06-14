import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from "../components/Hero2";
import Form from "../components/Form";


const Contact = ()=>{
    return(
        <>
         <Navbar/>
         <Hero2 heading="CONTACT ME" text="Let's have a conversation"/>
        <Form />
        <Footer/>
        
        </>
    )
}
export default Contact;