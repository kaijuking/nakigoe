'use-strict';

//background-image: url('../images/yokohama_fuji.jpg');
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
      profileImage: 'images/osakaflu.jpg',
      headerImage: 'images/yokohama_fuji.jpg',
      activeUser: true
    },
    {
      username: 'godzilla',
      realname: '怪獣王',
      followers:['kaijuking', 'kingkong'],
      following: ['kaijuking', 'kingkong'],
      tweetCount: 2,
      profileImage: 'images/godzilla profile.jpg',
      headerImage: 'images/godzilla header.png',
      activeUser: false
    },
    {
      username: 'kingkong',
      realname: 'King Kong',
      followers: ['godzilla'],
      following: ['kaijuking', 'godzilla'],
      tweetCount: 2,
      profileImage: 'images/kingkong.jpg',
      headerImage: 'images/kongheader.jpg',
      activeUser: false
    }
  ];

  var activeUser = 'kaijuking';
  var inactiveUser = '';

  var tweet = function(username, message) {
    this.username = username;
    this.message = message;
  };


/*Post A Tweet*/
document.addEventListener('DOMContentLoaded', function(event){
  console.log('DOM has fully loaded and parsed.');
  displayTimeLineTweets();
  configureTimelineTweets();
  //setupActiveUserTimeline();
  //displayUserTweets(activeUser);
});

var homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', function(event) {
  document.location.reload(true);
});

/*Twitter Timeline - The following functions are used for Issue #1*/
/*Generate and append the elements needed to post a new tweet*/
function displayTimeLineTweets() {
  for(var i = 0; i < allTweets.length; i++) {
    var username = allTweets[i].username;

    /*Create the element to hold the user's profile picture*/
    var newImage = document.createElement('img');
    newImage.setAttribute('class', 'media-object img-thumbnail img-responsive profile-image');
    newImage.setAttribute('src', getProfileImageUrl(username));

    var newImageLink = document.createElement('a');
    newImageLink.setAttribute('href', '#');
    newImageLink.setAttribute('name', getUserName(username));
    newImageLink.appendChild(newImage);

    var newImageMediaDiv = document.createElement('div');
    newImageMediaDiv.setAttribute('class', 'media-left media-top');
    newImageMediaDiv.appendChild(newImageLink);

    var newColumnDiv = document.createElement('div'); //this will need to be appended to newRowDiv
    newColumnDiv.setAttribute('class', 'col-md-12');
    newColumnDiv.appendChild(newImageMediaDiv);

    /*Create the elements to hold the user's realname, username, retweet/favorite icons and the tweet message*/
    var favoriteIcon = document.createElement('i'); //this needs to be appended to spanFavoriteIcon
    favoriteIcon.setAttribute('class', 'fa fa-heart-o');
    var spanFavoriteIcon = document.createElement('span');
    spanFavoriteIcon.setAttribute('class', 'tweet-favorite');
    spanFavoriteIcon.appendChild(favoriteIcon);

    var retweetIcon = document.createElement('i'); //this needs to be appended to spanRetweetIcon
    retweetIcon.setAttribute('class', 'fa fa-retweet');
    var spanRetweetIcon = document.createElement('span');
    spanRetweetIcon.setAttribute('class', 'tweet-retweet');
    spanRetweetIcon.appendChild(retweetIcon);

    var spanTweetRealName = document.createElement('span');
    spanTweetRealName.setAttribute('class', 'tweet-realname');
    var realName = document.createTextNode(getRealName(username));
    spanTweetRealName.appendChild(realName);

    var spanTweetUserName = document.createElement('span');
    spanTweetUserName.setAttribute('class', 'tweet-username');
    var userName = document.createTextNode(getUserName(username));
    spanTweetUserName.appendChild(userName);

    var newMediaHeading = document.createElement('h4'); //this needs to be be appended to newMediaBodyDiv
    newMediaHeading.setAttribute('class', 'media-heading');
    newMediaHeading.appendChild(spanTweetUserName);
    newMediaHeading.appendChild(spanTweetRealName);
    newMediaHeading.appendChild(spanRetweetIcon);
    newMediaHeading.appendChild(spanFavoriteIcon);

    var newMediaBodyDiv = document.createElement('div'); //this needs to be appended to newRowDiv
    newMediaBodyDiv.setAttribute('class', 'media-body');
    newMediaBodyDiv.appendChild(newMediaHeading);
    var theTweetMessage = document.createTextNode(allTweets[i].message);
    var messageParagraph = document.createElement('p');
    messageParagraph.appendChild(theTweetMessage);
    newMediaBodyDiv.appendChild(messageParagraph);

    newColumnDiv.appendChild(newMediaBodyDiv);
    var newRowDiv = document.createElement('div'); //this will need to be appended to parentNode
    newRowDiv.setAttribute('class', 'row');
    newRowDiv.appendChild(newColumnDiv);


    var parentNode = document.getElementById('twitter-timeline');
    parentNode.appendChild(newRowDiv);

  };
};

/*Configure the behavior of the links in the default tweets*/
function configureTimelineTweets(){
  /*Shows either the 'follow-user' DIV (Issue #2) or 'post-tweet' DIV (Issue #3)*/
  var linkBtn = document.getElementsByTagName('a');
  var inactiveUserDiv = document.getElementById('inactiveuser-timeline');
  var activeUserDiv = document.getElementById('activeuser-timeline');
  //var twitterTimelineDiv = document.getElementById('twitter-timeline');

  for(var i = 0; i < linkBtn.length; i++){
    linkBtn[i].addEventListener('click', function(event) {
      var theEvent = event.target.parentNode.name;
      //console.log(theEvent);
      var myEvent = event.target.parentNode;
      //console.log(myEvent);
      if(theEvent != null && theEvent != activeUser) {
        inactiveUser = theEvent;
        //console.log(activeUser);
        //console.log(theEvent);
        inactiveUserDiv.setAttribute('class', 'show');
        activeUserDiv.setAttribute('class', 'hidden');
        myEvent.setAttribute('href', '#follow-user');
        setupInactiveUserTimeline(inactiveUser);
        //displayUserTweets(inactiveUser);
      };
      if(theEvent != null && theEvent === activeUser) {
        inactiveUserDiv.setAttribute('class', 'hidden');
        activeUserDiv.setAttribute('class', 'show');
        myEvent.setAttribute('href', '#post-tweet');
      };
    });
  };
};

function setupInactiveUserTimeline(username){
  var realNameText = getRealName(username);
  var realName = document.getElementById('inactiveuser-realname');
  realName.textContent = realNameText;

  var userNameText = '@' + getUserName(username);
  var userName = document.getElementById('inactiveuser-username');
  userName.textContent = userNameText;

  var followerCount = getTotalFollowers(username);
  var numFollowers = document.getElementById('inactiveuser-numFollowers')
  numFollowers.textContent = followerCount + " Followers";

  var followingCount = getTotalFollowing(username);
  var numFollowing = document.getElementById('inactiveuser-numFollowing')
  numFollowing.textContent = followingCount + " Following";

  var profileImageURL = getProfileImageUrl(username);
  var profileImage = document.getElementById('inactiveuser-profilepic');
  profileImage.setAttribute('src', profileImageURL);

  var headerImageURL = getHeaderImageUrl(username);
  var headerImage = document.getElementById('inactive-hero');
  headerImage.style.backgroundImage = "url('" + headerImageURL + "')";
  console.log("realname = " + realNameText);
  console.log("username = " + userNameText);
  console.log("numFollowers = " + followerCount);
  console.log("numFollowing = " + followingCount);
  console.log("profile image url = " + profileImageURL);
  console.log("header image url = " + headerImageURL);
};




/*--------------------------------------------------------------------------*/
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

/*Update the user's tweet count. Tweet count property is in the "allUsers" array*/
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

function getHeaderImageUrl(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].headerImage;
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

function displayUserTweets(username) {
  console.log(username)
  if(username === activeUser){
    pNode = 'activeuser';
  }
  else {
    pNode = 'inactiveuser';
  }
  for( var i = 0; i < allTweets.length; i++) {
    if(username === allTweets[i].username) {
      console.log(allTweets[i].message);
      displayTweet(username, allTweets[i].message, pNode);
    };
  };
};
