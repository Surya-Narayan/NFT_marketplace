// src/components/ToggleView.js
import React, { useState } from 'react';
import { Toggle, Stack } from '@fluentui/react';

const ToggleView = ({ onToggle }) => {
  const [isCreatorView, setCreatorView] = useState(true);

  const handleToggle = () => {
    setCreatorView(!isCreatorView);
    onToggle(!isCreatorView); // Notify parent component about the toggle
  };

  return (
    <div className="mb-8 text-center">
      <Stack horizontal tokens={{ childrenGap: 10 }} align="center">
        <span className="text-lg font-semibold">Creator</span>
        <Toggle
          checked={isCreatorView}
          onChange={handleToggle}
          styles={{
            root: {
              borderRadius: '16px',
              backgroundColor: isCreatorView ? '#0078D4' : '#EDEBE9',
            },
            thumb: {
              backgroundColor: isCreatorView ? 'white' : '#0078D4',
            },
          }}
        />
        <span className="text-lg font-semibold">Buyer</span>
      </Stack>
    </div>
  );
};

export default ToggleView;
