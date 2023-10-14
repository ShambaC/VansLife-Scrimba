import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import Navbar from './components/Navbar';
import Credits from './components/Credits'

import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';

import "./server"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
      <Credits />
    </BrowserRouter>
  )
}

createRoot(document.getElementById("root")).render(<App />)