function Social(){
	
};

Social.prototype.share= function(){
	this.friendName=prompt("put your friend name to share with: ","");
	console.log("Shared with"+this.friendName);
}

Social.prototype.like= function(){
	console.log("I like this movie!");
}

Movie.prototype = new Social;

function Movie(){
	this.attributes = {};
	this.movieList =[];
	this.actors = [];
}

Movie.prototype = new Actor;

Movie.prototype.setActor = function(attr, name) {
	this.attributes[attr]=name;
};

Movie.prototype.play = function(){
	console.log("playing: "+this.attributes["title"]);
}

Movie.prototype.stop =function(){
	console.log("stopped");
}

Movie.prototype.set = function(attr, value){
	this.attributes[attr] = value;
}

Movie.prototype.get = function(attr) {
	return this.attributes[attr];
}