import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import HomePage from './components/Home'; 
import Header from './components/Header'; 
import About from './components/About';
import Experience from './components/Experience';
import Achievement from './components/Achivement';
import Project from './components/Project';
import Skills from './components/Skills';
import Education from './components/Eduction';
import Resume from './components/Resume';
import Certificates from './components/Certificate';  
function App() { 
 
  return (
    
    <Router>
      
 
           < Header />
          <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Exp" element={<Experience/>} />
          <Route path="/achivement" element={<Achievement/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/eduction" element={<Education/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/certificates" element={<Certificates/>} /> 
             

             
 </Routes>
    </Router>
  );
}

export default App;
 
