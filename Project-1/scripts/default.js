'use-strict';

/*SETUP DEFAULT VALUES ON DOCUMENT LOAD*/
var allTweets = [];
var allUsers = [];
var activeUser = 'kaijuking';

var kaijuking = {
  username: 'kaijuking',
  realname: 'Michael Field',
  followers:['godzilla', 'kingkong'],
  following: ['godzilla'],
  tweetCount: 0,
  profileImage: 'images/osakaflu.jpg'
};

var godzilla = {
  username: 'godzilla',
  realname: '怪獣王',
  followers:['kaijuking', 'kingkong'],
  following: ['kaijuking', 'kingkong'],
  tweetCount: 0,
  profileImage: 'images/osakaflu.jpg'
};

var kingkong = {
  username: 'kingkong',
  realname: 'King Kong',
  followers: ['godzilla'],
  following: ['kaijuking', 'godzilla'],
  tweetCount: 0,
  profileImage: 'images/osakaflu.jpg'
};

allUsers.push(kaijuking);
allUsers.push(godzilla);
allUsers.push(kingkong);
console.log(allUsers);

var tweet = function(username, message) {
  this.username = username;
  this.message = message;
};

/*GET 'Post Tweet' BUTTON's 'submit' EVENT ON FORM*/
var myForm = document.getElementById('form-createTweet');
myForm.addEventListener('submit', function(event){
  event.preventDefault();

  var message = document.getElementById('newTweet');
  var tweetMessage = message.value;

  createTweet(activeUser, tweetMessage);
  displayTweet(activeUser, tweetMessage);
  updateTweetCount(activeUser);

  console.log(allTweets);
  console.log(allUsers);
}, false);

function createTweet(username, tweetMessage){
  var newTweet = new tweet(username, tweetMessage);
  allTweets.push(newTweet);
};

function displayTweet(username, tweetMessage) {
  /*CREATE THE <div> ELEMENT TO HOLD THE <a> ELEMENT*/
  //var divImage = document.createElement('div');
  //divImage.setAttribute('class', 'media-left media-top');
  /*CREATE THE <a> ELEMENT TO HOLD THE IMAGE*/
  //var imageHolder = document.createElement('a');
  /*CREATE THE TWEET PROFILE IMAGE ELEMENT*/
  //var userImage = document.createElement('img');
  //userImage.setAttribute('class', 'media-object img-thumbnail');
  //userImage.setAttribute('src', getProfileImageUrl(username));

  /*CREATE THE H4 ELEMENT TO HOLD THE USERNAME AND TWEETNAME ELEMENTS*/
  //var tweetHeading = document.createElement('h4');
  //tweetHeading.setAttribute('class', 'media-heading');
  /*CREATE THE TWEET USERNAME AND TWEETNAME ELEMENTS*/
  //var userName = document.createElement('span');
  //userName.setAttribute('class', 'tweet-username');
  //var tweetName = document.createElement('span');
  //tweetName.setAttribute('class', 'tweet-tweetname');

  /*CREATE THE H4 ELEMENT TO HOLD THE TWEET  MESSAGE*/
  //var tweetMessage = document.createElement('h4');



  //var newSpan = document.createElement('span');
  //var spanText = document.createTextNode(getUserName(username));
  //newSpan.appendChild(spanText);

  /*Create the element to hold the user's profile picture*/
  var newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'media-left media-top');
  var newLink = document.createElement('a');
  var newImg = document.createElement('img');
  newImg.setAttribute('class', 'media-object img-thumbnail');
  newImg.setAttribute('src', getProfileImageUrl(username));
  newLink.appendChild(newImg);
  newDiv.appendChild(newLink);

  var newDiv1 = document.createElement('div');
  newDiv1.setAttribute('class', 'media-body');
  var newH4_span  = document.createElement('h4');
  newH4_span.setAttribute('class', 'media-heading');
  var newSpan1 = document.createElement('span');
  newSpan1.setAttribute('class', 'tweet-username');
  var userName = document.createTextNode(username);
  newSpan1.appendChild(userName);
  var newSpan2 = document.createElement('span');
  newSpan2.setAttribute('class', 'tweet-tweetname');
  var tweetUserName = document.createTextNode('@'+username);
  newSpan2.appendChild(tweetUserName);
  newH4_span.appendChild(newSpan1);
  newH4_span.appendChild(newSpan2);
  var newH4_message = document.createElement('h4');
  var message = document.createTextNode(tweetMessage);
  newH4_message.appendChild(message);
  newDiv1.appendChild(newH4_span);
  newDiv1.appendChild(newH4_message);

  var newDiv2 = document.createElement('div');
  newDiv2.setAttribute('class', 'media col-md-10 col-md-offset-1');
  newDiv2.appendChild(newDiv);
  newDiv2.appendChild(newDiv1);

  var newDiv3 = document.createElement('div');
  newDiv3.setAttribute('class', 'row row-tweet');
  newDiv3.appendChild(newDiv2);


  /*GET PARENT ELEMENT: THIS IS THE 'all-tweets' DIV IN WHICH ALL TWEETS WILL BE APPENDED TO*/
  var parentNode = document.getElementById('all-tweets');
  parentNode.appendChild(newDiv3);


};

/*Return all the user's Tweets based upon the user's username*/
function getAllTweets(username){
  for(i = 0; i < allTweets.length; i++){
    if(allTweets[i].username === username){
      //return allTweets[i].message;
      console.log(allTweets[i].message);
    }
  }
}

/*Return all the user's followers based upon the user's username*/
function getAllFollowers(username){
  for(i = 0; i < allUsers.length; i++){
    if(allUsers[i].username === username){
      return allUsers[i].followers;
      console.log(allUsers[i].followers);
    };
  };
};

/*Return all the people the user is following based upon the user's username*/
function getAllFollowing(username){
  for(i = 0; i < allUsers.length; i++){
    if(allUsers[i].username === username){
      return allUsers[i].following;
      console.log(allUsers[i].following);
    };
  };
};

/*Add a new 'follower' to the user*/
function addFollower(username, newFollower){
  for(i = 0; i < allUsers.length; i++){
    if(allUsers[i].username === username){
      allUsers[i].followers.push(newFollower);
    };
  };
};

/*Add a new 'following' to the user*/
function addFollowing(username, newFollowing){
  for(i = 0; i < allUsers.length; i++){
    if(allUsers[i].username === username){
      allUsers[i].following.push(newFollowing);
    };
  };
};

function updateTweetCount(username){
  for(i = 0; i < allUsers.length; i++){
    if(allUsers[i].username === username){
      allUsers[i].tweetCount++;
    };
  };
};

function getTotalFollowers(username){
  for(i = 0; i < allUsers.length; i++){
    if(allUsers[i].username === username){
      return allUsers[i].followers.length;
    };
  };
};

function getTotalFollowing(username){
  for(i = 0; i < allUsers.length; i++){
    if(allUsers[i].username === username){
      return allUsers[i].following.length;
    };
  };
};

function getProfileImageUrl(username){
  for(i = 0; i < allUsers.length; i++){
    if(allUsers[i].username === username){
      return allUsers[i].profileImage;
    };
  };
};

function getUserName(username){
  for(i = 0; i < allUsers.length; i++){
    if(allUsers[i].username === username){
      return allUsers[i].username;
    };
  };
};
