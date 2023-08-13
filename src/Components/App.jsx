import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Profile from "./Auth/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
