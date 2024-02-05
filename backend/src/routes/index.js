// routes/index.js
const express = require('express');
const router = express.Router();
const membershipsController = require('../controllers/membershipsController');

// Define routes
router.get('/memberships', membershipsController.getAllMemberships);
router.post('/memberships', membershipsController.createMembership);

module.exports = router;
