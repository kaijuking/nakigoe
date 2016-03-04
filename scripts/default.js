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
      isActiveUser: true
    },
    {
      username: 'godzilla',
      realname: '怪獣王',
      followers:['kaijuking', 'kingkong'],
      following: ['kaijuking', 'kingkong'],
      tweetCount: 2,
      profileImage: 'images/godzilla profile.jpg',
      headerImage: 'images/godzilla header.png',
      isActiveUser: false
    },
    {
      username: 'kingkong',
      realname: 'King Kong',
      followers: ['godzilla'],
      following: ['kaijuking', 'godzilla'],
      tweetCount: 2,
      profileImage: 'images/kingkong.jpg',
      headerImage: 'images/kongheader.jpg',
      isActiveUser: false
    }
  ];

var activeUser = getActiveUser();
//var inactiveUser = '';

  var tweet = function(username, message) {
    this.username = username;
    this.message = message;
  };

/*Setup process*/
document.addEventListener('DOMContentLoaded', function(event){
  console.log('DOM has fully loaded and parsed.');
  displayTimeLineTweets();
  configureTimelineTweets();
  console.log('Active User = ' + getActiveUser());
  console.log(getAllFollowing(getActiveUser()));
});

var homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', function(event) {
  document.location.reload(true);
});

/*GET 'Post Tweet' BUTTON's 'submit' EVENT ON FORM*/
var myForm = document.getElementById('form-createTweet');
myForm.addEventListener('submit', function(event){
  event.preventDefault();
  var message = document.getElementById('newTweet');
  var tweetMessage = message.value;


  var theTwitterTimeline = 'twitter-timeline';
  var theActiveUserTimeline = 'activeuser-all-tweets';

  user = getActiveUser();

  createTweet(user, tweetMessage);
  displaySingleTweet(user, tweetMessage) //, theTwitterTimeline);
  //createTweet(user, tweetMessage);
  //displaySingleTweet(user, tweetMessage, theActiveUserTimeline);

}, false);

var followButton = document.getElementById('follow-button');
followButton.addEventListener('click', function(event) {
  event.preventDefault();
  var b = getAllFollowing('kaijuking');
  console.log(b.length);

  followButton.removeChild(followButton.firstChild);
  var text = document.createTextNode('Following');
  followButton.appendChild(text);
  followButton.setAttribute('class', 'btn btn-info show');
});


/*Create a new tweet object and push it into the allTweets array*/
function createTweet(username, tweetMessage) {
  var newTweet = new tweet(username, tweetMessage);
  allTweets.push(newTweet);
  console.log(allTweets);
};

/*Generate and append the elements needed to post a new tweet*/
function displaySingleTweet(username, tweetMessage){

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
  var theTweetMessage = document.createTextNode(tweetMessage);
  var messageParagraph = document.createElement('p');
  messageParagraph.appendChild(theTweetMessage);
  newMediaBodyDiv.appendChild(messageParagraph);

  newColumnDiv.appendChild(newMediaBodyDiv);
  var newRowDiv = document.createElement('div'); //this will need to be appended to parentNode
  newRowDiv.setAttribute('class', 'row');
  newRowDiv.appendChild(newColumnDiv);

  var parentNode = document.getElementById('twitter-timeline');

};

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
  //var inactiveUserDiv = document.getElementById('inactiveuser-timeline');
  //var activeUserDiv = document.getElementById('activeuser-timeline');
  //var twitterTimelineDiv = document.getElementById('twitter-timeline');

  for(var i = 0; i < linkBtn.length; i++){
    linkBtn[i].addEventListener('click', function(event) {
      var targetUserName = event.target.parentNode.name;
      console.log(targetUserName);
      var userTimeline = document.getElementById('user-timeline');
      var twitterTimeline = document.getElementById('twitter-timeline');

      if(targetUserName != null){
        console.log('targetUserName is not null');
        displayAllUserTweets(targetUserName);
        setupUserTimeline(targetUserName);
        toggleTweetFollowButton(targetUserName);
        twitterTimeline.setAttribute('class', 'container hidden');
        userTimeline.setAttribute('class', 'container show');
        console.log(getAllFollowers(targetUserName));
      };
    });
  };
};

function setupUserTimeline(username){
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
  headerImage.setAttribute('src', headerImageURL);
  headerImage.style.backgroundImage = "url('" + headerImageURL + "')";
  console.log("realname = " + realNameText);
  console.log("username = " + userNameText);
  console.log("numFollowers = " + followerCount);
  console.log("numFollowing = " + followingCount);
  console.log("profile image url = " + profileImageURL);
  console.log("header image url = " + headerImageURL);
};

/*Generate and append the elements needed to post a new tweet*/
function displayAllUserTweets(username) {
  for( var i = 0; i < allTweets.length; i++) {
    if(username === allTweets[i].username) {
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

      var parentNode = document.getElementById('inactiveuser-all-tweets');
      parentNode.appendChild(newRowDiv);
    };
  };
};

/*--------------------------------------------------------------------------*/
/*Return all the user's Tweets based upon the user's username*/
function toggleTweetFollowButton(username){
  var btnPost = document.getElementById('post-button');
  var btnFollow = document.getElementById('follow-button');
  var followingState = isFollowing(username);
  for(var i = 0; i < allUsers.length; i++) {
    var active = getActiveUser();
    if(username === active) {
      btnPost.setAttribute('class', 'btn btn-primary hide');
      btnFollow.setAttribute('class', 'btn btn-primary hide');
    } else if (username != active && followingState == true) {
      btnPost.setAttribute('class', 'btn btn-primary hide');
      btnFollow.setAttribute('class', 'btn btn-primary hide');
    } else {
      btnPost.setAttribute('class', 'btn btn-primary hide');
      btnFollow.setAttribute('class', 'btn btn-primary show');
    };
  };
};

function getAllTweets(username) {
  for(var i = 0; i < allTweets.length; i++) {
    if(allTweets[i].username === username) {
      return allTweets[i].message;
      //console.log(allTweets[i].message);
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
      console.log(username + ' is following: ' + allUsers[i].following);
    };
  };
};

function isFollowing(username){
  var isAFollower = false;
  for(var i = 0; i < allUsers.length; i++){
    if(allUsers[i].username === username){
      for(var n = 0; n < allUsers[i].followers.length; n++){
        console.log(allUsers[i].followers[n]);
        if(allUsers[i].followers[n] === activeUser){
          isAFollower = true;
        } else {
          continue;
        };
      };
    };
  };
  console.log(isAFollower);
  return isAFollower;
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
      //console.log(allUsers[i].headerImage);
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

function getActiveUser() {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].isActiveUser == true){
      return allUsers[i].username;
    };
  };
};
