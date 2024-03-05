import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery";

// import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Gallery />} />
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
