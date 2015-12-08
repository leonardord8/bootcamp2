function MovieDownloader(name){
	Movie.apply(this,[]);
	this.adress="www.fasds.com/"+name;
}

MovieDownloader.prototype = new Movie;

MovieDownloader.prototype.download = function() {
	console.log("downloading... from "+this.adress);
};