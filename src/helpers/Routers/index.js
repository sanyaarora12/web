import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../container/Home";
import Login from "../../container/Login";

export default function Routers() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
