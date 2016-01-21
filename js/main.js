
var credits = 1000;
var search_term = " ";

var option_1 = document.getElementById("read");
option_1.addEventListener("click", function(event){
  credits = credits + 100;
  document.getElementById("initial_options").style.display = "none";
  document.getElementById("tweet_options").style.display = "inherit";
  document.getElementById("points").innerHTML = credits;
});


var option_2 = document.getElementById("advertise");
option_2.addEventListener("click", function(event){
  credits = credits + 200;
  document.getElementById("initial_options").style.display = "none";
  document.getElementById("tweet_options").style.display = "none";
  document.getElementById("points").innerHTML = credits;
});

var option_3 = document.getElementById("compose");
option_3.addEventListener("click", function(event){
  credits = credits - 150;
  document.getElementById("initial_options").style.display = "none";
  document.getElementById("tweet_options").style.display = "inherit";
  document.getElementById("points").innerHTML = credits;
});

var search_tweets = document.getElementById("search_logo");
search_tweets.addEventListener("click", function(event){

  document.getElementById("tweet_collection").style.display = "inherit";

  document.getElementById("points").innerHTML = credits;

  search_term = document.getElementById("search_query").value;

  getTweets(search_term);
});


var tweet_1 = document.getElementById("tweet_1");
tweet_1.addEventListener("click", function(event){
  returnHome();
});

var tweet_2 = document.getElementById("tweet_2");
tweet_2.addEventListener("click", function(event){
  returnHome();
});

var tweet_3 = document.getElementById("tweet_3");
tweet_3.addEventListener("click", function(event){
  returnHome();
});

function resetTweets() {
  document.getElementById("user_1").innerHTML = "";
  document.getElementById("collected_tweet_1").innerHTML = "";

  document.getElementById("user_2").innerHTML = "";
  document.getElementById("collected_tweet_2").innerHTML = "";

  document.getElementById("user_3").innerHTML = "";
  document.getElementById("collected_tweet_3").innerHTML = "";

  document.getElementById("search_query").value = "";
}

function returnHome() {
  resetTweets();
  document.getElementById("initial_options").style.display = "inherit";
  document.getElementById("tweet_options").style.display = "none";
  document.getElementById("tweet_collection").style.display = "none";
}


function getTweets(search_term){
  searchTweets(search_term);
}

function displayTweets(tweets){

  document.getElementById("user_1").innerHTML = tweets[0].user.screen_name;
  document.getElementById("collected_tweet_1").innerHTML = tweets[0].text;

  document.getElementById("user_2").innerHTML = tweets[1].user.screen_name;
  document.getElementById("collected_tweet_2").innerHTML = tweets[1].text;

  document.getElementById("user_3").innerHTML = tweets[2].user.screen_name;
  document.getElementById("collected_tweet_3").innerHTML = tweets[2].text;
}


const Sentiment = require("sentiment");

function searchTweets(subject) {

  $.ajax({
    url: 'get_tweets.php?q=' + subject,
    type: 'GET',
    success: function(response) {
      console.log(response);
      scoredTweets = [];

      for (var i = 0; i < response.statuses.length; i++) {
        var tweet = response.statuses[i].text;
        var sent = Sentiment(tweet).score;

        var combo = { tweet: response.statuses[i], sentiment: sent };
        scoredTweets.push(combo);
      }

      scoredTweets.sort(function(a, b) {
        return a.sentiment - b.sentiment;
      } );

      console.log("highest");
      console.log(scoredTweets[0]);
      console.log("lowest");
      console.log(scoredTweets[scoredTweets.length - 1]);
      console.log("middle");
      console.log(scoredTweets[scoredTweets.length/2]);

      var tweetsArray = [scoredTweets[0].tweet, scoredTweets[scoredTweets.length/2].tweet, scoredTweets[scoredTweets.length - 1].tweet];

      displayTweets(tweetsArray);
    },
    error: function(errors) {
      console.log(errors);
    }
  });

}


