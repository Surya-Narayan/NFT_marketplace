// src/components/ToggleView.js
import React, { useState } from 'react';

const ToggleView = ({ onToggle }) => {
  const [isCreatorView, setCreatorView] = useState(true);

  const handleToggle = () => {
    setCreatorView(!isCreatorView);
    onToggle(!isCreatorView); // Notify parent component about the toggle
  };

  return (
    <div className="mb-8 text-center">
      <label className="flex items-center space-x-2 cursor-pointer">
        <span className={`text-lg font-semibold ${isCreatorView ? 'text-blue-500' : 'text-gray-500'}`}>Creator</span>
        <div className="relative">
          <input type="checkbox" className="hidden" onChange={handleToggle} />
          <div className={`toggle ${isCreatorView ? 'toggle--active' : ''}`} />
        </div>
        <span className={`text-lg font-semibold ${isCreatorView ? 'text-gray-500' : 'text-blue-500'}`}>Buyer</span>
      </label>
    </div>
  );
};

export default ToggleView;
