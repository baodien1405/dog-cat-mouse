function Mouse(name) {
    this.nam = name;
    this.isDead = false;
}

Mouse.prototype.die = function() {
    this.isDead = true;
}
module.exports = Mouse;