// Event listener for the transaction form submission
document.getElementById('transaction-form').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get form values
  const type = document.getElementById('type').value;
  const amount = document.getElementById('amount').value;
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;

  // Send POST request to add a new transaction
  const response = await fetch('/api/transactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ type, amount, description, date }),
  });

  // Parse the response to get the newly created transaction
  const transaction = await response.json();
  // Add the new transaction to the table
  addTransactionToTable(transaction);
  // Update the total amount displayed
  updateTotalAmount();
});

// Function to fetch all transactions and display them
async function getTransactions() {
  // Send GET request to fetch all transactions
  const response = await fetch('/api/transactions');
  const transactions = await response.json();
  // Add each transaction to the table
  transactions.forEach(addTransactionToTable);
  // Update the total amount displayed
  updateTotalAmount();
}

// Function to add a transaction to the table
function addTransactionToTable(transaction) {
  const table = document.getElementById('transaction-table').querySelector('tbody');
  const row = document.createElement('tr');

  // Create table row HTML with transaction data
  row.innerHTML = `
    <td>${transaction.type}</td>
    <td>${transaction.amount}</td>
    <td>${transaction.description}</td>
    <td>${new Date(transaction.date).toLocaleDateString()}</td>
    <td><button class="delete-btn" data-id="${transaction._id}">Delete</button></td>
  `;

  // Attach event listener to the delete button
  row.querySelector('.delete-btn').addEventListener('click', async (e) => {
    const button = e.target;
    const id = button.getAttribute('data-id');
    // Send DELETE request to remove the transaction
    await deleteTransaction(id);
    // Remove the row from the table
    row.remove();
    // Update the total amount displayed
    updateTotalAmount();
  });

  // Append the new row to the table
  table.appendChild(row);
}

// Function to send DELETE request to the server
async function deleteTransaction(id) {
  const response = await fetch(`/api/transactions/${id}`, {
    method: 'DELETE',
  });

  // Log an error if the request was not successful
  if (!response.ok) {
    console.error('Failed to delete transaction');
  }
}

// Function to update the total amount displayed
function updateTotalAmount() {
  const table = document.getElementById('transaction-table').querySelector('tbody');
  const rows = table.querySelectorAll('tr');
  let total = 0;

  // Calculate the total amount based on transaction types
  rows.forEach(row => {
    const amount = parseFloat(row.children[1].textContent);
    const type = row.children[0].textContent;
    total += type === 'Income' ? amount : -amount;
  });

  // Update the total amount displayed
  document.getElementById('total').textContent = total.toFixed(2);
}

// Fetch and display all transactions on page load
getTransactions();
