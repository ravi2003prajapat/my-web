import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Navbar'
import Home from './assets/Components/Home'
import Portfolio from './assets/Components/Portfolio'
import Blog from './assets/Components/Blog'

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App