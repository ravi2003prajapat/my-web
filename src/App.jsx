import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import Home from "./assets/Components/Home";
import Portfolio from "./assets/Components/Portfolio";
import Blog from "./assets/Components/Blog";
import Footer from "./assets/Components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        
      </Router>
      <Footer />
    </div>
  );
};

export default App;
