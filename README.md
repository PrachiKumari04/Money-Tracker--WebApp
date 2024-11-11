
# Finance Flow

**Finance Flow** is a money tracking application designed to help users manage their income and expenses. It provides a simple and intuitive interface to track financial transactions and view the total balance.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [License](#license)
- [Author](#author)

## Project Overview

Finance Flow allows users to:
- Add transactions with details like type (Income/Expense), amount, description, and date.
- View all transactions in a table format.
- Delete transactions as needed.
- Automatically update and display the total balance.

## Features

- **Add Transactions**: Input details such as type, amount, description, and date.
- **View Transactions**: Display transactions in a table.
- **Delete Transactions**: Remove transactions from the list.
- **Total Balance**: Calculate and show the total balance dynamically.

## File Structure

Here's the structure of the project:

```
money-tracker/
│
├── public/
│   ├── css/
│   │   └── styles.css        # CSS stylesheet for styling the frontend
│   ├── js/
│   │   └── scripts.js        # JavaScript file for frontend functionality
│   └── index.html            # Main HTML file for the application
│
├── models/
│   └── transaction.js        # Mongoose model for transactions
│
├── routes/
│   └── transactions.js       # Express router for handling transaction-related API routes
│
├── server.js                 # Main server file that sets up and runs the Express application
├── package.json              # Project metadata and dependencies
├── LICENSE                   # License information
└── README.md                 # Project documentation
```

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/money-tracker.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd money-tracker
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Up MongoDB**

   Ensure MongoDB is installed and running. Create a database named `moneyTracker`.

5. **Start the Server**

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:3000`.

## Usage

1. **Open the Application**

   Go to `http://localhost:3000` in your web browser.

2. **Add a Transaction**

   - Select `Income` or `Expense` from the dropdown.
   - Enter the amount, description, and date.
   - Click "Add Transaction".

3. **View Transactions**

   Transactions will be listed in the table below the form.

4. **Delete a Transaction**

   Click the "Delete" button next to the transaction you want to remove.

## API Endpoints

- **GET /api/transactions**
  - Fetch all transactions.
  
- **POST /api/transactions**
  - Create a new transaction. Requires a request body with `type`, `amount`, `description`, and `date`.
  
- **DELETE /api/transactions/:id**
  - Delete a transaction by its ID.

## Technologies

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Middleware**: Body-Parser
- **Libraries**: Mongoose


## Author

- **[Prachi Kumari]** - https://github.com/PrachiKumari04


![Capture](https://github.com/user-attachments/assets/e59372ff-41a3-4bff-8e8b-2440f618f3d3)



https://github.com/user-attachments/assets/8ad5cace-b760-4d1b-93c9-441c1ab4f3d0


