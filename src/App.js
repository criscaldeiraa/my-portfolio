import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component.jsx';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        {/* <Route path='/' element={<Navigation />} > */}
          <Route path='/' element={<Home />} />
          <Route path='skills' />
      </Routes>
    </div>
  );
}

export default App;
