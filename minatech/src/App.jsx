import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Programacao from './pages/Programacao'
import OSCS from "./pages/OSCS";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Programacao" element={<Programacao />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/oscs" element={<OSCS />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
