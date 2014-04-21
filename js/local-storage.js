/**
  * Local storage
  */

// Check if storage is available
if (typeof(Storage) !== 'undefined') {
  // Go ahead
} else {
  // No luck
}

// Set local storage item
localStorage.firstName = 'Kris';

// OR
localStorage.setItem('firstName','Kris');

// Get local storage item
var name = localStorage.firstName;

// OR
var name = localStorage.getItem('firstName')

// Removed local storage item
localStorage.removeItem('firstName');

// Clear local storage
localStorage.clear();

// Person object
var person = {
  firstName: 'Kris',
  lastName: 'Olszewski'
}

// Set object as JSON string
localStorage.person = JSON.stringify(person);

// Get object from JSON string
var person = JSON.parse(localStorage.person);
