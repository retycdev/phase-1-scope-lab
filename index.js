// Write your solution in this file!
// Declare `customerName` in the global scope and assign it the value 'bob'
var customerName = 'bob';

// Function to uppercase the `customerName` variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Reassigns `customerName` to uppercase
}

// Declare `bestCustomer` in the global scope
var bestCustomer;

// Function to set the value of `bestCustomer` to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob'; // Sets `bestCustomer` to 'not bob'
}

// Function to overwrite the value of `bestCustomer`
function overwriteBestCustomer(newCustomer) {
  bestCustomer = newCustomer; // Reassigns `bestCustomer` to the passed argument
}

// Declare `leastFavoriteCustomer` as a constant
const leastFavoriteCustomer = 'someone else';

// Function to attempt changing `leastFavoriteCustomer` (throws an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This will throw an error since it's a constant
}

// Exporting the functions
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};
