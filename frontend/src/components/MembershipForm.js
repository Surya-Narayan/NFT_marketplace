// src/components/MembershipForm.js
import React, { useState } from 'react';
import { TextField, DefaultButton } from '@fluentui/react';


const MembershipForm = ({ isCreatorView }) => {
  const [formData, setFormData] = useState({
    title: '',
    symbol: '',
    image: '',
    price: '',
    benefits: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Membership Form</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Symbol"
          name="symbol"
          value={formData.symbol}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Image URL"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Price (USD)"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        <TextField
          label="Benefits (comma-separated)"
          name="benefits"
          value={formData.benefits}
          onChange={handleInputChange}
          required
        />
        <DefaultButton
          type="submit"
          styles={{ root: { background: '#0078D4', color: 'white', marginTop: '10px' } }}
        >
          Create Membership
        </DefaultButton>
      </form>
    </div>
  );
};

export default MembershipForm;
