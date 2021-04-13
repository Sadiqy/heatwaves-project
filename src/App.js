import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/header'
import Body from './components/body'
import Gridbody from './components/gridBody'
import Slider from './components/carousel'
import BelowSearch from './components/belowSearch'
//import Navbar from 'react-navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <Header/>
      <Body/>
      <Gridbody/>
      <BelowSearch/>
      <Slider/>
    </div>
  );
}

export default App;
