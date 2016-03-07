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
});

var homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', function(event) {
  document.location.reload(true);
  // event.preventDefault();
  //
  // var timeline = document.getElementById('twitter-timeline');
  // var timelineState = timeline.getAttribute('class');
  //
  // var user = document.getElementById('user-timeline');
  // var userState = user.getAttribute('class');
  //
  // if(userState === 'container show'){
  //   user.setAttribute('class', 'container hidden');
  //   timeline.setAttribute('class', 'container show');
  //
  // };
  //
  // displayTimeLineTweets();
  // configureTimelineTweets();

});

/*GET 'Post Tweet' BUTTON's 'submit' EVENT ON FORM*/
//var myForm = document.getElementById('form-createTweet');
var postBtn = document.getElementById('timeline-post-tweet-button');
postBtn.addEventListener('click', function(event){
  event.preventDefault();
  var message = document.getElementById('new-message');
  var tweetMessage = message.value;

  var visible = document.getElementById('user-timeline');
  var state = visible.getAttribute('class');
  console.log(state);
  var node = '';
  user = getActiveUser();

  if(state == 'container hidden'){
    node = 'twitter-timeline';
    createTweet(user, tweetMessage);
    displaySingleTweet(user, tweetMessage, node);
    configureTimelineTweets();
  }
  if(state == 'container show'){
    node = 'user-all-tweets';
    createTweet(user, tweetMessage);
    displaySingleTweet(user, tweetMessage, node);
    //configureTimelineTweets();
  }

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
function displaySingleTweet(username, tweetMessage, node){
  console.log(node);

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
  spanFavoriteIcon.setAttribute('class', 'favorite');
  spanFavoriteIcon.appendChild(favoriteIcon);

  var retweetIcon = document.createElement('i'); //this needs to be appended to spanRetweetIcon
  retweetIcon.setAttribute('class', 'fa fa-retweet');
  var spanRetweetIcon = document.createElement('span');
  spanRetweetIcon.setAttribute('class', 'retweet');
  spanRetweetIcon.appendChild(retweetIcon);

  var spanTweetRealName = document.createElement('span');
  spanTweetRealName.setAttribute('class', 'realname');
  var realName = document.createTextNode(getRealName(username));
  spanTweetRealName.appendChild(realName);

  var spanTweetUserName = document.createElement('span');
  spanTweetUserName.setAttribute('class', 'username');
  var userName = document.createTextNode('@' + getUserName(username));
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

  var parentNode = document.getElementById(node); //('user-all-tweets');
  parentNode.appendChild(newRowDiv);

};

/*Twitter Timeline - The following functions are used for Issue #1*/
/*Generate and append the elements needed to post a new tweet*/
function displayTimeLineTweets() {
  console.log('tweet array length is: ' + allTweets.length);
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
    spanFavoriteIcon.setAttribute('class', 'favorite');
    spanFavoriteIcon.appendChild(favoriteIcon);

    var retweetIcon = document.createElement('i'); //this needs to be appended to spanRetweetIcon
    retweetIcon.setAttribute('class', 'fa fa-retweet');
    var spanRetweetIcon = document.createElement('span');
    spanRetweetIcon.setAttribute('class', 'retweet');
    spanRetweetIcon.appendChild(retweetIcon);

    var spanTweetRealName = document.createElement('span');
    spanTweetRealName.setAttribute('class', 'realname');
    var realName = document.createTextNode(getRealName(username));
    spanTweetRealName.appendChild(realName);

    var spanTweetUserName = document.createElement('span');
    spanTweetUserName.setAttribute('class', 'username');
    var userName = document.createTextNode('@' + getUserName(username));
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

  for(var i = 0; i < linkBtn.length; i++){
    linkBtn[i].addEventListener('click', function(event) {
      var targetUserName = event.target.parentNode.name;
      console.log('The target user is: ' + targetUserName);
      var userTimeline = document.getElementById('user-timeline');
      var twitterTimeline = document.getElementById('twitter-timeline');
      var me = event.target.id;
      console.log('the event is: ' + me);
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
  var realName = document.getElementById('realname');
  realName.textContent = realNameText;

  var userNameText = '@' + getUserName(username);
  var userName = document.getElementById('username');
  userName.textContent = userNameText;

  var followerCount = getTotalFollowers(username);
  var numFollowers = document.getElementById('numFollowers')
  numFollowers.textContent = followerCount + " Followers";

  var followingCount = getTotalFollowing(username);
  var numFollowing = document.getElementById('numFollowing')
  numFollowing.textContent = followingCount + " Following";

  var profileImageURL = getProfileImageUrl(username);
  var profileImage = document.getElementById('profilepic');
  profileImage.setAttribute('src', profileImageURL);

  var headerImageURL = getHeaderImageUrl(username);
  var headerImage = document.getElementById('hero');
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
      spanFavoriteIcon.setAttribute('class', 'favorite');
      spanFavoriteIcon.appendChild(favoriteIcon);

      var retweetIcon = document.createElement('i'); //this needs to be appended to spanRetweetIcon
      retweetIcon.setAttribute('class', 'fa fa-retweet');
      var spanRetweetIcon = document.createElement('span');
      spanRetweetIcon.setAttribute('class', 'retweet');
      spanRetweetIcon.appendChild(retweetIcon);

      var spanTweetRealName = document.createElement('span');
      spanTweetRealName.setAttribute('class', 'realname');
      var realName = document.createTextNode(getRealName(username));
      spanTweetRealName.appendChild(realName);

      var spanTweetUserName = document.createElement('span');
      spanTweetUserName.setAttribute('class', 'username');
      var userName = document.createTextNode('@' + getUserName(username));
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

      var parentNode = document.getElementById('user-all-tweets');
      parentNode.appendChild(newRowDiv);
    };
  };
};

/*--------------------------------------------------------------------------*/
/*Return all the user's Tweets based upon the user's username*/
function toggleTweetFollowButton(username){
  var btnPost = document.getElementById('post-button');
  var btnFollow = document.getElementById('follow-button');
  //var followingState = isFollowing(username);
  for(var i = 0; i < allUsers.length; i++) {
    var active = getActiveUser();
    if(username === active) {
      btnPost.setAttribute('class', 'btn btn-primary hide');
      btnFollow.setAttribute('class', 'btn btn-primary hide');
    } else if (username != active && isFollowing(username)) { //followingState == true) {
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



var tstBtn = document.getElementById('test-button');
tstBtn.addEventListener('click', function(event) {
  event.preventDefault();
  var username = 'kaijuking';

  var userTweets = document.createElement('div');
  userTweets.setAttribute('class', 'container');
  userTweets.setAttribute('id', username + '-all-tweets');

  var followButton = document.createElement('button');
  followButton.setAttribute('type', 'button');
  followButton.setAttribute('class', 'btn btn-default show');
  followButton.setAttribute('id', 'follow-button');
  followButton.setAttribute('value', 'FollowUser');
  var buttonText2 = document.createTextNode('Follow User');
  followButton.appendChild(buttonText2);

  var tweetButton = document.createElement('button');
  tweetButton.setAttribute('type', 'submit');
  tweetButton.setAttribute('class', 'btn btn-primary show');
  tweetButton.setAttribute('id', 'post-button');
  tweetButton.setAttribute('value', 'PostTweet');
  var buttonText1 = document.createTextNode('Post Tweet');
  tweetButton.appendChild(buttonText1);

  var following = document.createElement('span');
  following.setAttribute('class', 'following');
  following.setAttribute('id', username + '-following');
  var followingCount = document.createTextNode(getTotalFollowing(username) + ' Following');
  following.appendChild(followingCount);
  var followers = document.createElement('span');
  followers.setAttribute('class', 'followers');
  followers.setAttribute('id', username + '-followers');
  var followerCount = document.createTextNode(getTotalFollowers(username) + ' Followers');
  followers.appendChild(followerCount);

  var followInfo = document.createElement('p');
  followInfo.appendChild(following);
  followInfo.appendChild(followers);

  var realName = document.createElement('span');
  realName.setAttribute('class', 'realname');
  realName.setAttribute('id', username + '-realname');
  var realText = document.createTextNode(getRealName(username));
  realName.appendChild(realText);
  var userName = document.createElement('span');
  userName.setAttribute('class', 'username');
  userName.setAttribute('id', username + '-username');
  var userText = document.createTextNode('@' + getUserName(username));
  userName.appendChild(userText);

  var nameInfo = document.createElement('p');
  nameInfo.appendChild(realName);
  nameInfo.appendChild(userName);

  var userInfo = document.createElement('div');
  userInfo.setAttribute('class', 'pull-left user-info');
  userInfo.appendChild(nameInfo);
  userInfo.appendChild(followInfo);
  userInfo.appendChild(tweetButton);
  userInfo.appendChild(followButton);


  var profileImage = document.createElement('img');
  profileImage.setAttribute('class', 'img-responsive img-thumbnail pull-left profile-image');
  profileImage.setAttribute('id', username + '-profile-image');
  profileImage.setAttribute('src', getProfileImageUrl(username));
  profileImage.setAttribute('alt', '');

  var headerImage = document.createElement('img');
  headerImage.setAttribute('class', 'img-responsive img-thumbnail header-image');
  headerImage.setAttribute('id', username + '-hero');
  headerImage.setAttribute('src', getHeaderImageUrl(username));
  headerImage.setAttribute('alt', '');

  var hero = document.createElement('div');
  hero.setAttribute('class', 'container hero');
  hero.appendChild(headerImage);
  hero.appendChild(profileImage);
  hero.appendChild(userInfo);

  var column = document.createElement('div');
  column.setAttribute('class', 'col-md-12');
  column.appendChild(hero);

  var row = document.createElement('div');
  row.setAttribute('class', 'row');
  row.appendChild(column);

  var user = document.createElement('div');
  user.setAttribute('class', 'container show');
  user.setAttribute('id', username + '-timeline');
  user.setAttribute('name', 'user-timeline');
  user.appendChild(row);

  var parentNode = document.getElementById('test-div');
  parentNode.appendChild(user);
  parentNode.appendChild(userTweets);

})
