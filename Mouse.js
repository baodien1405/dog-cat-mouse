function Mouse(name) {
    this.nam = name;
    this.dead = false;
}

Mouse.prototype.die = function() {
    this.dead = true;
}
module.export = Mouse;