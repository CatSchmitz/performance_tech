
var credits = 1000; 
var search_term = " ";



var option_1 = document.getElementById("read");
  	option_1.addEventListener("click", function(event){

  	credits = credits + 100;
  	//event.preventDefault();
 	document.getElementById("initial_options").style.display = "none";
 	document.getElementById("tweet_options").style.display = "inherit";
 	document.getElementById("points").innerHTML = credits;



});


var option_2 = document.getElementById("advertise");
  	option_2.addEventListener("click", function(event){

  	credits = credits + 200;
  	//event.preventDefault();
	document.getElementById("initial_options").style.display = "none";
 	document.getElementById("tweet_options").style.display = "inherit";
 	document.getElementById("points").innerHTML = credits;


});

var option_3 = document.getElementById("compose");
  	option_3.addEventListener("click", function(event){

  	credits = credits - 150;
  	//event.preventDefault();
	document.getElementById("initial_options").style.display = "none";
 	document.getElementById("tweet_options").style.display = "inherit";
 	document.getElementById("points").innerHTML = credits;

});

var search_tweets = document.getElementById("search_logo");
  	search_tweets.addEventListener("click", function(event){
  	//event.preventDefault();
  	

 	document.getElementById("tweet_collection").style.display = "inherit";

 	document.getElementById("points").innerHTML = credits;

 	search_term = document.getElementById("search_query").value;

 	
 	getTweets(search_term);

});


var tweet_1 = document.getElementById("tweet_1");
  	tweet_1.addEventListener("click", function(event){
  	//event.preventDefault();
 	document.getElementById("initial_options").style.display = "inherit";
 	document.getElementById("tweet_options").style.display = "none";
 	 document.getElementById("tweet_collection").style.display = "none";


});

var tweet_2 = document.getElementById("tweet_2");
  	tweet_2.addEventListener("click", function(event){
  	//event.preventDefault();
 	document.getElementById("initial_options").style.display = "inherit";
 	document.getElementById("tweet_options").style.display = "none";
 	 document.getElementById("tweet_collection").style.display = "none";

});

var tweet_3 = document.getElementById("tweet_3");
  	tweet_3.addEventListener("click", function(event){
  	//event.preventDefault();
 	document.getElementById("initial_options").style.display = "inherit";
 	document.getElementById("tweet_options").style.display = "none";
 	document.getElementById("tweet_collection").style.display = "none";

});


function getTweets(search_term){
	
	
	//jon, work your magic here.

	//return an array of four tweets
}

function displayTweets(tweets){

}

