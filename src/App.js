import React from 'react'
import Home from './components/Home'
import Details from './components/Details'
import Identify from './components/Identify';
import Plants from './components/Plants'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="identify" element= {<Identify />} />
          <Route path="Plants" element= {<Plants />} />
          <Route path="details/:name" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App