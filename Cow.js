var chalk = require('chalk');

function Cow(name) {
    this.name = name;
    this.stomach = [];
}

Cow.prototype.eat = function(cat) {
    this.stomach.push(cat);
}

Cow.prototype.sayHi = function() {
    console.log('Hi! I am cow. My name is ' + chalk.red(this.name));
}

module.exports = Cow;