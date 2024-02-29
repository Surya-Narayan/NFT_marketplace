// src/components/MembershipForm.js
import React, { useState } from 'react';
import { TextField, DefaultButton } from '@fluentui/react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your server
      const response = await axios.post('http://localhost:3000/memberships', formData);
      setFormData({
        title: '',
        symbol: '',
        image: '',
        price: '',
        benefits: '',
      });
      // Handle the response as needed
      console.log('Server Response:', response.data);
      toast.success('Membership added successfully!', { position: toast.POSITION.TOP_RIGHT });

    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
      toast.error('Error adding membership. Please try again.', { position: toast.POSITION.TOP_RIGHT });

    }
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
