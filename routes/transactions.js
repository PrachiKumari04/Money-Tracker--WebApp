const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

// Route to get all transactions
router.get('/', async (req, res) => {
  try {
    // Retrieve all transactions from the database
    const transactions = await Transaction.find();
    // Send the transactions as JSON response
    res.json(transactions);
  } catch (err) {
    // If there's an error, send a 500 status with the error message
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new transaction
router.post('/', async (req, res) => {
  // Create a new transaction instance with data from the request body
  const transaction = new Transaction({
    type: req.body.type,
    amount: req.body.amount,
    description: req.body.description,
    date: req.body.date
  });

  try {
    // Save the new transaction to the database
    const newTransaction = await transaction.save();
    // Send the newly created transaction as JSON response with a 201 status
    res.status(201).json(newTransaction);
  } catch (err) {
    // If there's an error, send a 400 status with the error message
    res.status(400).json({ message: err.message });
  }
});

// Route to delete a transaction by ID
router.delete('/:id', async (req, res) => {
  try {
    // Attempt to find and delete the transaction by ID
    const result = await Transaction.findByIdAndDelete(req.params.id);

    // Check if the transaction was found and deleted
    if (!result) {
      // If not found, send a 404 status with a not found message
      return res.status(404).json({ message: 'Transaction not found' });
    }

    // If successful, send a 204 status indicating no content to send back
    res.status(204).end();
  } catch (err) {
    // If there's an error, send a 500 status with the error message
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
