import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Destinations from "./Components/Destinations";
import Packages from "./Components/Packages";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import CarRental from "./Pages/CarRental";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/car-rental" element={<CarRental />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
