import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import About from './Components/Navbar/About';
import Home from './Components/Navbar/Home';
import Navbar from "./Components/Navbar/Navbar"
import Project from './Components/Navbar/Project';


function App() {
  return(
   <Router>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
   </Router>
  )
}

export default App;
