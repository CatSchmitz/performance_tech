<?php

require_once('twitter_proxy.php');

// Twitter OAuth Config options
$oauth_access_token = '16136050-e9pEkJJPwW3IJLvVjvxYZTEhYuFZswZYTbxKCqaEs';
$oauth_access_token_secret = 'd3Maawmu3aHzaqPuDJeN2ZXjArPd2YSSZUmSm3PiDyW0o';
$consumer_key = 'oMneWsagJShov1Eywm9UQ9OjU';
$consumer_secret = 'uJmuGePPbkxFxcqSV02IqmXd6jjqAc3siaxiRXoivljnOt6Jsf';
$user_id = '16136050';
$screen_name = 'jonbeilin';
$count = 100;

$twitter_url = 'search/tweets.json';
$twitter_url .= '?user_id=' . $user_id;
$twitter_url .= '&screen_name=' . $screen_name;
$twitter_url .= '&count=' . $count;
$twitter_url .= '&q=' . filter_input(INPUT_GET,"q",FILTER_SANITIZE_STRING);

// echo $twitter_url;

// Create a Twitter Proxy object from our twitter_proxy.php class
$twitter_proxy = new TwitterProxy(
	$oauth_access_token,			// 'Access token' on https://apps.twitter.com
	$oauth_access_token_secret,		// 'Access token secret' on https://apps.twitter.com
	$consumer_key,					// 'API key' on https://apps.twitter.com
	$consumer_secret,				// 'API secret' on https://apps.twitter.com
	$user_id,						// User id (http://gettwitterid.com/)
	$screen_name,					// Twitter handle
	$count							// The number of tweets to pull out
);

// Invoke the get method to retrieve results via a cURL request
$tweets = $twitter_proxy->get($twitter_url);

echo $tweets;

?>
