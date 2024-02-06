import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navigation from './components/navigation/navigation.component.jsx';
import Home from './routes/home/home.component.jsx';
import Socials from './components/footer-socials/footer-socials.component.jsx';

import './App.css';

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='skills' />
      </Routes>
      <Socials />
    </div>
  );
}

export default App;
