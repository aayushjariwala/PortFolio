import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Work from '../components/Work';
import React from 'react'
import  PriceCard  from '../components/PriceCard';

const Project = ()=>{
    return(
        <>
       
        <Navbar/>
        <Hero2 heading="PROJECTS" text="Here are a few examples of my most recent accomplishments" />
        <Work />
        <PriceCard />






        <Footer/>
        </>
    )
}
export default Project;