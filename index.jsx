import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Credits from './components/Credits'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Credits />
    </BrowserRouter>
  )
}

createRoot(document.getElementById("root")).render(<App />)