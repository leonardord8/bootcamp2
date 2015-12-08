var harrisonFord =new Actor("Harrison Ford");

var starWars = new Movie();
starWars.set("title","StarWars");

var starWarsFan = new MovieObserver();

var downloadStarwars = new MovieDownloader("Star Wars!");

$(document).ready(function(){
	$("#playMovie").click(function(){
		starWars.play();
		starWarsFan.notify();
		starWars.setActor("actor","harrison Ford");
	});

	$("#stopMovie").click(function(){
		starWars.stop();
		starWarsFan.stoppedMovie();
	});

	$("#download").on('click',function(){
		downloadStarwars.download();
	});

	$("#share").click(function(){
		starWars.share();
	});

	$("#like").click(function(){
		starWars.like();
	});
});

