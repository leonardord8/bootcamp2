function MovieObserver(){
	this.name="pepito";
}

MovieObserver.prototype.watchingMovie = function() {
	console.log("i'm watching the movie");
};

MovieObserver.prototype.stoppedMovie = function() {
	console.log("The movie Stopped!!");
};

MovieObserver.prototype.notify = function() {
	this.watchingMovie();
};