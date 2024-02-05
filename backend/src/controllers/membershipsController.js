// controllers/membershipsController.js

const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://nftuser:nftuser@cluster0.yb01tnq.mongodb.net/?retryWrites=true&w=majority'; // Replace with your actual MongoDB connection URI

const client = new MongoClient(uri, { useNewUrlParser: false, useUnifiedTopology: false });
let membershipsCollection;

client.connect()
  .then(() => {
    membershipsCollection = client.db('nftdb').collection('nftcollection');
  })
  .catch(err => console.error(err));

// Get all memberships
const getAllMemberships = async (req, res) => {
  try {
    const memberships = await membershipsCollection.find().toArray();
    res.json(memberships);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new membership
const createMembership = async (req, res) => {
  const { title, symbol, image, price, benefits } = req.body;

  // Validate input (you can add more validation as needed)

  const newMembership = {
    title,
    symbol,
    image,
    price,
    benefits,
  };

  try {
    const result = await membershipsCollection.insertOne(newMembership);
    res.status(201).json({ message: 'Membership created successfully', id: result.insertedId });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllMemberships,
  createMembership,
};
