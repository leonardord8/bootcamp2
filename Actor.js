function Actor(name){
	this.actorName=name;
}

Actor.prototype.setName = function(name) {
	this.actorName=name;
};

Actor.prototype.getName = function() {
	return this.actorName;
};