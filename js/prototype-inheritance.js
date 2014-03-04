var Person = function () {
  this.getName = function () {
    return this.firstName + ' ' + this.lastName;
  };
  this.getSkills = function () {
    return this.skills.join(', ');
  };
};

var Developer = function (firstName, lastName, skills) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.skills = skills;
};

Developer.prototype = new Person();

var kris = new Developer('Kris', 'Olszewski', ['html', 'css', 'js']);
var randy = new Developer('Randy', 'Brown', ['coldfusion', 'sql', 'iis']);

console.log("Hi, my name is " + kris.getName() + " and I'm good at " + kris.getSkills() + '.');
console.log("Hi, my name is " + randy.getName() + " and I'm good at " + randy.getSkills() + '.');