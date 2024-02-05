// src/components/MembershipsList.js
import React, { useState, useEffect } from 'react';

const MembershipsList = () => {
  const [memberships, setMemberships] = useState([]);

  // Fetch memberships data (dummy data for now)
  useEffect(() => {
    // Implement API call or fetch logic here
    // For now, using dummy data
    const dummyData = [
      {
        title: 'Exclusive Access Pass',
        symbol: 'EAP123',
        image: 'https://example.com/eap123-image.jpg',
        price: 25,
        benefits: ['Early Content Access', 'VIP Events Entry', 'Private Community Forum'],
      },
      // Add more dummy data as needed
    ];
    setMemberships(dummyData);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Memberships List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {memberships.map((membership, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <img src={membership.image} alt={membership.title} className="mb-4 w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mb-2">{membership.title}</h3>
            <p className="text-gray-600 mb-2">Symbol: {membership.symbol}</p>
            <p className="text-gray-600 mb-2">Price: ${membership.price}</p>
            <ul className="list-disc pl-4">
              {membership.benefits.map((benefit, idx) => (
                <li key={idx} className="text-gray-600">{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipsList;
