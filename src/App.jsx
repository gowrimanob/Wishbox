import { useState } from 'react'
import './App.css'
import Navbar from './HeroSection/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './HeroSection/Home'

function App() {

  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}  />
    </Routes>
    
    </>
  )
}

export default App




