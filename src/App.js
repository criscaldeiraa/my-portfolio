import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/navigation/navigation.component.jsx';
import Home from './routes/home/home.component.jsx';
import Socials from './components/footer-socials/footer-socials.component.jsx';
import About from './routes/about/about.component.jsx';
import MyWork from './routes/my-work/my-work.component.jsx';
import Contact from './routes/contact/contact.component.jsx';

import './App.css';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='my-work' element={<MyWork />} />
          <Route path='about' element={<About />} />
          <Route path='contact-me' element={<Contact />} />
      </Routes>
      <Socials />
    </div>
  );
}

export default App;
