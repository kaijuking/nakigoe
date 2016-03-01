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

  /*Populate the user's REALNAME, USERNAME, #FOLLOWING and #FOLLOWERS <span> elments on DOM load*/
  document.addEventListener('DOMContentLoaded', function() {
    var realNameText = getRealName(activeUser);
    var realName = document.getElementById('realname');
    realName.textContent = realNameText;

    var userNameText = '@' + getUserName(activeUser);
    var userName = document.getElementById('username');
    userName.textContent = userNameText;

    var followerCount = getTotalFollowers(activeUser);
    console.log(followerCount);
    var numFollowers = document.getElementById('numFollowers')
    numFollowers.textContent = followerCount + " Followers";

    var followingCount = getTotalFollowing(activeUser);
    var numFollowing = document.getElementById('numFollowing')
    numFollowing.textContent = followingCount + " Following";

  });

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
  /*Create the element to hold the user's profile picture*/
  var newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'media-left media-top');
  var newLink = document.createElement('a');
  var newImg = document.createElement('img');
  newImg.setAttribute('class', 'media-object img-thumbnail');
  newImg.setAttribute('src', getProfileImageUrl(username));
  newLink.appendChild(newImg);
  newDiv.appendChild(newLink);

  /*Create the elements to hold the user's realname, username and tweet message*/
  var newDiv1 = document.createElement('div');
  newDiv1.setAttribute('class', 'media-body');
  var newH4_span  = document.createElement('h4');
  newH4_span.setAttribute('class', 'media-heading');
  var newSpan1 = document.createElement('span');
  newSpan1.setAttribute('class', 'tweet-realname');
  var userName = document.createTextNode(getRealName(username));
  newSpan1.appendChild(userName);
  var newSpan2 = document.createElement('span');
  newSpan2.setAttribute('class', 'tweet-username');
  var tweetUserName = document.createTextNode('@' + getUserName(username));
  newSpan2.appendChild(tweetUserName);
  newH4_span.appendChild(newSpan1);
  newH4_span.appendChild(newSpan2);
  var newH4_message = document.createElement('h4');
  var message = document.createTextNode(tweetMessage);
  newH4_message.appendChild(message);
  newDiv1.appendChild(newH4_span);
  newDiv1.appendChild(newH4_message);

  /*Create the element to hold the DIVs containing the user's image, realname, username and tweet message*/
  var newDiv2 = document.createElement('div');
  newDiv2.setAttribute('class', 'media col-md-10 col-md-offset-1');
  newDiv2.appendChild(newDiv);
  newDiv2.appendChild(newDiv1);

  /*Create the ROW div needed to hold the new tweet*/
  var newDiv3 = document.createElement('div');
  newDiv3.setAttribute('class', 'row row-tweet');
  newDiv3.appendChild(newDiv2);

  /*Append the ROW div, which holds the new tweet, to the parent element*/
  var parentNode = document.getElementById('all-tweets');
  parentNode.appendChild(newDiv3);

};

/*Return all the user's Tweets based upon the user's username*/
function getAllTweets(username) {
  for(i = 0; i < allTweets.length; i++) {
    if(allTweets[i].username === username) {
      //return allTweets[i].message;
      console.log(allTweets[i].message);
    }
  }
}

/*Return all the user's followers based upon the user's username*/
function getAllFollowers(username) {
  for(i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].followers;
      console.log(allUsers[i].followers);
    };
  };
};

/*Return all the people the user is following based upon the user's username*/
function getAllFollowing(username) {
  for(i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].following;
      console.log(allUsers[i].following);
    };
  };
};

/*Add a new 'follower' to the user*/
function addFollower(username, newFollower) {
  for(i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      allUsers[i].followers.push(newFollower);
    };
  };
};

/*Add a new 'following' to the user*/
function addFollowing(username, newFollowing) {
  for(i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      allUsers[i].following.push(newFollowing);
    };
  };
};

function updateTweetCount(username) {
  for(i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      allUsers[i].tweetCount++;
    };
  };
};

function getTotalFollowers(username) {
  for(i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].followers.length;
    };
  };
};

function getTotalFollowing(username) {
  for(i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].following.length;
    };
  };
};

function getProfileImageUrl(username) {
  for(i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].profileImage;
    };
  };
};

function getUserName(username) {
  for(i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].username;
    };
  };
};

function getRealName(username) {
  for(i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === activeUser) {
      return allUsers[i].realname;
    }
  }
};
