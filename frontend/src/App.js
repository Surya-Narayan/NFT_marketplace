// src/App.js
import React, { useState } from 'react';
import ToggleView from './components/ToggleView';
import MembershipForm from './components/MembershipForm';
import MembershipsList from './components/MembershipsList';

const App = () => {
  const [isCreatorView, setIsCreatorView] = useState(true);

  const handleToggleView = (isCreator) => {
    setIsCreatorView(isCreator);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">NFT Memberships Marketplace</h1>
      <ToggleView onToggle={handleToggleView} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <MembershipForm isCreatorView={isCreatorView} />
        </div>
        <div>
          <MembershipsList />
        </div>
      </div>
    </div>
  );
};

export default App;
