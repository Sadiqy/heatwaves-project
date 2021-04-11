import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/header'
import Body from './components/body';
//import Navbar from 'react-navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
