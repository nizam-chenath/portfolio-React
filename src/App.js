import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import About from './Components/Navbar/About';
import Home from './Components/Navbar/Home';
import Navbar from "./Components/Navbar/Navbar"


function App() {
  return(
   <Router>
      <Navbar/>
      <Home/>
      <About/>
   </Router>
  )
}

export default App;
