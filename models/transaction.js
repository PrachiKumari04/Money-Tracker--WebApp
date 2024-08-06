const mongoose = require('mongoose'); // Import mongoose for MongoDB interaction
const Schema = mongoose.Schema; // Create a shorthand for the mongoose Schema constructor

// Define the schema for a transaction
const TransactionSchema = new Schema({
  type: {
    type: String, // The type of the transaction, either 'Income' or 'Expense'
    enum: ['Income', 'Expense'], // Restrict the type to only 'Income' or 'Expense'
    required: true // This field is required
  },
  amount: {
    type: Number, // The amount of the transaction
    required: true // This field is required
  },
  date: {
    type: Date, // The date of the transaction
    default: Date.now // Default to the current date and time if not provided
  },
  description: {
    type: String, // A description of the transaction
    required: true // This field is required
  }
});

// Export the model based on the schema for use in other parts of the application
module.exports = mongoose.model('Transaction', TransactionSchema);
