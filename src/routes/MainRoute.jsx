import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";
import About from "../pages/About";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<About />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
