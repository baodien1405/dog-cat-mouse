var Cow = require('./Cow');
var Cat = require('./Cat');

var cow = new Cow('Spike');
var cat = new Cat();

cow.eat(cat);
console.log(cow);