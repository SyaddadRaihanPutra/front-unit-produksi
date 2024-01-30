import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
