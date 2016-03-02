'use-strict';

  /*SETUP DEFAULT VALUES ON DOCUMENT LOAD*/
  var allTweets = [
    {
      username: 'kaijuking',
      message: '怪獣だ。海の中から。ゴジラ来た。'
    },
    {
      username: 'godzilla',
      message: '俺は怪獣王だ！'
    },
    {
      username: 'kingkong',
      message: 'I like climbing tall buildings. But man, watch out for those planes!'
    },
    {
      username: 'godzilla',
      message: 'Things seem to be getting rather rough for #Gamera these days!'
    },
    {
      username: 'kingkong',
      message: 'godzilla - Just wait till we meet on the big screen again!'
    },
    {
      username: 'kaijuking',
      message: 'Cannot wait to get a new job!'
    }
  ];

  var allUsers = [
    {
      username: 'kaijuking',
      realname: 'Michael Field',
      followers:['godzilla', 'kingkong'],
      following: ['godzilla'],
      tweetCount: 2,
      profileImage: 'images/osakaflu.jpg'
    },
    {
      username: 'godzilla',
      realname: '怪獣王',
      followers:['kaijuking', 'kingkong'],
      following: ['kaijuking', 'kingkong'],
      tweetCount: 2,
      profileImage: 'images/godzilla.jpg'
    },
    {
      username: 'kingkong',
      realname: 'King Kong',
      followers: ['godzilla'],
      following: ['kaijuking', 'godzilla'],
      tweetCount: 2,
      profileImage: 'images/kingkong.jpg'
    }
  ];

  var activeUser = 'kaijuking';
  var inactiveUser = '';

  var tweet = function(username, message) {
    this.username = username;
    this.message = message;
  };

/*Populate the user's REALNAME, USERNAME, #FOLLOWING and #FOLLOWERS <span> elments on DOM load*/
/*Active User's Timeline - Used for Issue #3*/
  var realNameText = getRealName(activeUser);
  var realName = document.getElementById('activeuser-realname');
  realName.textContent = realNameText;

  var userNameText = '@' + getUserName(activeUser);
  var userName = document.getElementById('activeuser-username');
  userName.textContent = userNameText;

  var followerCount = getTotalFollowers(activeUser);
  var numFollowers = document.getElementById('activeuser-numFollowers')
  numFollowers.textContent = followerCount + " Followers";

  var followingCount = getTotalFollowing(activeUser);
  var numFollowing = document.getElementById('activeuser-numFollowing')
  numFollowing.textContent = followingCount + " Following";
  displayDefaultTweet();

/*GET 'Post Tweet' BUTTON's 'submit' EVENT ON FORM*/
/*Active User's Timeline - Used for Issue #3*/
var myForm = document.getElementById('form-createTweet');
myForm.addEventListener('submit', function(event){
  event.preventDefault();

  var message = document.getElementById('newTweet');
  var tweetMessage = message.value;

  createTweet(activeUser, tweetMessage);
  displayTweet(activeUser, tweetMessage);
  updateTweetCount(activeUser);

}, false);

/*Shows either the 'follow-user' DIV (Issue #2) or 'post-tweet' DIV (Issue #3)*/
var linkBtn = document.getElementsByTagName('a');
var postTweetDiv = document.getElementById('post-tweet');
var followUserDiv = document.getElementById('follow-user');
for(var i = 0; i < linkBtn.length; i++){
  var att = linkBtn[i].getAttribute('role');
  var name = linkBtn[i].getAttribute('name');
  if(att === 'button' && name === activeUser) {
    linkBtn[i].setAttribute('href', '#post-tweet');
    linkBtn[i].addEventListener('click', function(e){
      e.preventDefault();
      postTweetDiv.setAttribute('class', 'show');
    });
  };
  if(att === 'button' && name != activeUser){
    linkBtn[i].setAttribute('href', '#follow-user');
    linkBtn[i].addEventListener('click', function(e){
      e.preventDefault();
      followUserDiv.setAttribute('class', 'show');
    });
  };
};



/*Create a new tweet object and push it into the allTweets array*/
/*Active User's Timeline - Used for Issue #3*/
function createTweet(username, tweetMessage) {
  var newTweet = new tweet(username, tweetMessage);
  allTweets.push(newTweet);
};

/*Generate and append the elements needed to post a new tweet*/
/*Active User's Timeline - Used for Issue #3*/
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

  /*Create the elements to hold the user's realname, username, retweet/favorite icons and the tweet message*/
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

  var newSpan3 = document.createElement('span');
  newSpan3.setAttribute('class', 'tweet-retweet');
  var retweetIcon = document.createElement('i');
  retweetIcon.setAttribute('class', 'fa fa-retweet');
  newSpan3.appendChild(retweetIcon);

  var newSpan4 = document.createElement('span');
  newSpan4.setAttribute('class', 'tweet-favorite');
  var favoriteIcon = document.createElement('i');
  favoriteIcon.setAttribute('class', 'fa fa-heart-o');
  newSpan4.appendChild(favoriteIcon);

  newH4_span.appendChild(newSpan1);
  newH4_span.appendChild(newSpan2);
  newH4_span.appendChild(newSpan3);
  newH4_span.appendChild(newSpan4);
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
  var parentNode = document.getElementById('activeuser-all-tweets');
  parentNode.appendChild(newDiv3);
};

/*Generate and append the elements needed to post a new tweet*/
/*Tweitter Timeline - Used for Issue #1*/
function displayDefaultTweet() {
  for(var i = 0; i < allTweets.length; i++) {
    var username = allTweets[i].username;

    /*Create the element to hold the user's profile picture*/
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'media-left media-top');
    var newLink = document.createElement('a');
    newLink.setAttribute('href', '#');
    newLink.setAttribute('name', getUserName(username));
    newLink.setAttribute('class', 'timeline');
    newLink.setAttribute('role', 'button');
    var newImg = document.createElement('img');
    newImg.setAttribute('class', 'media-object img-thumbnail');
    newImg.setAttribute('src', getProfileImageUrl(username));
    newLink.appendChild(newImg);
    newDiv.appendChild(newLink);

    /*Create the elements to hold the user's realname, username, retweet/favorite icons and the tweet message*/
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

    var newSpan3 = document.createElement('span');
    newSpan3.setAttribute('class', 'tweet-retweet');
    var retweetIcon = document.createElement('i');
    retweetIcon.setAttribute('class', 'fa fa-retweet');
    newSpan3.appendChild(retweetIcon);

    var newSpan4 = document.createElement('span');
    newSpan4.setAttribute('class', 'tweet-favorite');
    var favoriteIcon = document.createElement('i');
    favoriteIcon.setAttribute('class', 'fa fa-heart-o');
    newSpan4.appendChild(favoriteIcon);

    newH4_span.appendChild(newSpan1);
    newH4_span.appendChild(newSpan2);
    newH4_span.appendChild(newSpan3);
    newH4_span.appendChild(newSpan4);
    var newH4_message = document.createElement('h4');
    var message = document.createTextNode(allTweets[i].message);
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
    var parentNode = document.getElementById('default-tweets');
    parentNode.appendChild(newDiv3);
  };
};

/*Return all the user's Tweets based upon the user's username*/
function getAllTweets(username) {
  for(var i = 0; i < allTweets.length; i++) {
    if(allTweets[i].username === username) {
      //return allTweets[i].message;
      console.log(allTweets[i].message);
    }
  }
}

/*Return all the user's followers based upon the user's username*/
function getAllFollowers(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].followers;
      console.log(allUsers[i].followers);
    };
  };
};

/*Return all the people the user is following based upon the user's username*/
function getAllFollowing(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].following;
      console.log(allUsers[i].following);
    };
  };
};

/*Add a new 'follower' to the user*/
function addFollower(username, newFollower) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      allUsers[i].followers.push(newFollower);
    };
  };
};

/*Add a new 'following' to the user*/
function addFollowing(username, newFollowing) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      allUsers[i].following.push(newFollowing);
    };
  };
};

function updateTweetCount(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      allUsers[i].tweetCount++;
    };
  };
};

function getTotalFollowers(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].followers.length;
    };
  };
};

function getTotalFollowing(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].following.length;
    };
  };
};

function getProfileImageUrl(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].profileImage;
    };
  };
};

function getUserName(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].username;
    };
  };
};

function getRealName(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].realname;
    }
  }
};
