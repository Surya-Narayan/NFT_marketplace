import React, { useState, useEffect } from 'react';
import { List, Image, Label, Separator } from '@fluentui/react';
import axios from 'axios';

const MembershipsList = () => {
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch memberships data
    axios.get('http://localhost:3000/memberships')
      .then(response => {
        // Assuming the response.data is an array of memberships
        setMemberships(response.data);
      })
      .catch(error => {
        console.error('Error fetching memberships:', error);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Memberships List</h2>
      <List
        items={memberships}
        onRenderCell={(membership, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="w-40 h-40 overflow-hidden rounded-full mb-4 mx-auto">
              <Image
                src={membership.image}
                alt={membership.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-center">{membership.title}</h3>
            <Label className="text-gray-600 block mb-2">{`Symbol: ${membership.symbol}`}</Label>
            <Separator styles={{ root: { margin: '4' } }} />
            <Label className="text-gray-600 block mb-2">{`Price: $${membership.price}`}</Label>
            <Separator styles={{ root: { margin: '4' } }} />
            <p className="text-gray-700 mb-4 text-center">{membership.description}</p>
            <h4 className="text-xl font-semibold mb-2 text-center">Benefits:</h4>
            {Array.isArray(membership.benefits) ? (
              <ul className="list-disc pl-6 mb-4">
                {membership.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-gray-600">{benefit}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 text-center">No benefits available</p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default MembershipsList;
