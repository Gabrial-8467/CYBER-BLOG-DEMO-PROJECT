import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
