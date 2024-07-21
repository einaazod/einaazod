import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './home';
import {AboutMe} from './aboutme';
import {Portfolio} from './portfolio';
import {TechStack} from './techstack';
import {SoftSkills} from './softskills';
import {Education} from './education';
import {Certifications} from './certifications';
import {Contact} from './contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/soft-skills" element={<SoftSkills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;