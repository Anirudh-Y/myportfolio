import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components"
import { lazy } from 'react';

// const {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} = lazy(() => import('./components.js'));

function App() {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      {/* <Feedbacks/> */}
      <div className="relative z=0">
        <Contact/>
        {/* <StarsCanvas/> */}
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
