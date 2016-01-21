const TwitLib = require('twit');
const Twit = new TwitLib(require('./config.js'));
const Sentiment = require("sentiment");

function searchTweets(subject) {
  Twit.get('search/tweets', { q: subject, count: 100 }, function(error, data, response) {
    scoredTweets = [];

    for (var i = 0; i < data.length; i++) {
      var tweet = data[i].text;
      var sent = Sentiment(tweet).score;

      var combo = { tweet: data[i], sentiment: sent };
      scoredTweets.push(combo);
    }

/*
    var greatestTweet = {};
    var greatestSent = -9999;

    var leastTweet = {};
    var leastSent = 9999;

    var middleTweet = {};
    var middleSent = 9999;

    for (var j = 0; j < scoredTweets.length; j++) {
      var scoredTweet = scoredTweets[i];
      var sentiment = scoredTweet.sentiment;

      if (sentiment > greatestSent) {
        greatestTweet = scoredTweet.tweet;

      } else if (sentiment < leastSent) {
        leastTweet = scoredTweet.tweet;
      }

    }
    */

    scoredTweets.sort(function(a, b) {
      return a.sentiment - b.sentiment;
    } );

    console.log("highest");
    console.log(scoredTweets[0]);
    console.log("lowest");
    console.log(scoredTweets[scoredTweets.length - 1]);
    console.log("middle");
    console.log(scoredTweets[scoredTweets.length/2]);

    var tweetsArray = [scoredTweets[0].tweet, scoredTweets[scoredTweets.length - 1].tweets, scoredTweets[scoredTweets.length/2].tweet];

    displayTweets(tweetsArray);
  });
}
