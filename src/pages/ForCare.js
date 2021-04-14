import React from 'react'
import Navbar from '../components/Navbar'
import Header2 from '../components/header2'
import Carousel2 from '../components/carousel2'
import FormPage from '../components/form'
import Footer from '../components/footer'


function ForCare() {
  console.log("ON TEST ROUTE");
  return (
    <div className="app-container">
      <div className='inner-container'>
        <Navbar/>
        <Header2/>
        <Carousel2/>
        <FormPage/>
        </div>
        <Footer/>
    </div>
  );
}

export default ForCare;