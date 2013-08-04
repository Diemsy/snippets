/* --------------------------------------------------
  LOCAL STORAGE
-------------------------------------------------- */

// Check if storage is available
if (typeof(Storage) !== 'undefined') {
  // Go ahead
} else {
  // No luck
}
// Set local storage items
localStorage.firstName = 'Kris';
// OR
localStorage.setItem('firstName','Kris';
// Get local storage item
var name = localStorage.firstName;
// OR
var name = localStorage.getItem('firstName')
// Removed an item
localStorage.removeItem('firstName');
// Clear everything
localStorage.clear();
// Person object
var person = {
  firstName: 'Kris',
  lastName: 'Olszewski'
}
// Set object as a string in local storage
localStorage.person = JSON.stringify(person);
// Get object by parsing from local storage
var person = JSON.parse(localStorage.person);