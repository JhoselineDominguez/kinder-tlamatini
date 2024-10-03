import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Menu from './components/Menu';
import Payments from './components/Payments';
import Notifications from './components/Notifications';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
};

export default App;


