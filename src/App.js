import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home.js';
import ForCare from './pages/ForCare.js';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/ForCare" component={ForCare}/>
      </div>
    </Router>
  );
}

export default App;
