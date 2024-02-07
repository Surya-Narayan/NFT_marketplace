// src/App.js
import React, { useState } from 'react';
import ToggleView from './components/ToggleView';
import MembershipForm from './components/MembershipForm';
import MembershipsList from './components/MembershipsList';
import './App.css';

const App = () => {
  const [isCreatorView, setIsCreatorView] = useState(true);

  const handleToggleView = (isCreator) => {
    setIsCreatorView(isCreator);
  };

  return (
    <div className="container">
      <header>
        <h1>NFT Memberships Marketplace</h1>
      </header>
      <ToggleView onToggle={handleToggleView} />
      <div className="grid">
        <div>
          <MembershipForm isCreatorView={isCreatorView} />
        </div>
        <div>
          <MembershipsList />
        </div>
      </div>
      <footer>
        <p>&copy; 2024 NFT Memberships Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
