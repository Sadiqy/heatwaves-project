import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/header'
//import Navbar from 'react-navbar';

function App() {
  return (
    <div className="app-container">
      <Navbar/>
      <Header/>
    </div>
  );
}

export default App;
