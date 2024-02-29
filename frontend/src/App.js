// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MembershipForm from './components/MembershipForm';
import MembershipsList from './components/MembershipsList';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>NFT Memberships Marketplace</h1>
        </header>
        <div className="grid">
          <Routes>
            <Route path="/buyer" element={<MembershipsList />} />
            <Route path="/creator" element={<MembershipForm />} />
          </Routes>
        </div>
        <footer>
          <p>&copy; 2024 NFT Memberships Marketplace. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
