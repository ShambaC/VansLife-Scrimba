import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import "./server"

import Navbar from './components/Navbar';
import Credits from './components/Credits'

import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './pages/Host/HostLayout';
import HostVans from './pages/Host/Vans/HostVans';
import HostVanDetails from './pages/Host/Vans/HostVanDetails';
import HostVanDesc from './pages/Host/Vans/HostVanDesc';
import HostVanPrice from './pages/Host/Vans/HostVanPrice';
import HostVanPhotos from './pages/Host/Vans/HostVanPhotos';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} />
        <Route path='vans/:id' element={<VanDetail />} />

        <Route path='host' element={<HostLayout />} >
          <Route index element={<Dashboard />} />
          <Route path='income' element={<Income />} />
          <Route path='vans' element={<HostVans />} />

          <Route path='vans/:id' element={<HostVanDetails />} >
            <Route index element={<HostVanDesc />} />
            <Route path='pricing' element={<HostVanPrice />} />
            <Route path='photos' element={<HostVanPhotos />} />
          </Route>

          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Credits />
    </BrowserRouter>
  )
}

createRoot(document.getElementById("root")).render(<App />)