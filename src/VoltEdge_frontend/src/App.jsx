import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; // Import the Navbar component
import Home from './components/home/Home'; // Create this component
import Dashboard from './components/dashboard/Dashboard'; // Create this component
import Login from './components/login/Login'; // Create this component
import Auth from './components/auth/auth'; // Create this component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;