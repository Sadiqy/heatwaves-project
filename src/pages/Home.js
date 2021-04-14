import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/header'
import Body from '../components/body'
import Gridbody from '../components/gridBody'
import Slider from '../components/carousel'
import BelowSearch from '../components/belowSearch'
import BodyEnd from '../components/bodyEnd'
import Footer from '../components/footer'
//import Navbar from 'react-navbar';

function Home() {
  return (
    <div className="app-container">
      <div className="inner-container">
        <Navbar/>
        <Header/>
        <Body/>
        <Gridbody/>
        <BelowSearch/>
        <Slider/>
        <BodyEnd/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;