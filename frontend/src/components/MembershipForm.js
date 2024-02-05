// src/components/MembershipForm.js
import React, { useState } from 'react';

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
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="form-input w-full"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="symbol" className="block text-sm font-medium text-gray-600 mb-2">Symbol</label>
          <input
            type="text"
            id="symbol"
            name="symbol"
            value={formData.symbol}
            onChange={handleInputChange}
            className="form-input w-full"
            placeholder="Enter symbol"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-600 mb-2">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            className="form-input w-full"
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-600 mb-2">Price (USD)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="form-input w-full"
            placeholder="Enter price"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="benefits" className="block text-sm font-medium text-gray-600 mb-2">Benefits (comma-separated)</label>
          <input
            type="text"
            id="benefits"
            name="benefits"
            value={formData.benefits}
            onChange={handleInputChange}
            className="form-input w-full"
            placeholder="Enter benefits"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full">Create Membership</button>
      </form>
    </div>
  );
};

export default MembershipForm;
