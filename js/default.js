'use-strict';

/*SETUP DEFAULT VALUES ON DOCUMENT LOAD*/
var allRoars = [
  {
    username: 'kaijuking',
    message: '怪獣だ。海の中から。ゴジラ来た。',
    timestamp: 1457458167016,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'godzilla',
    message: '俺は怪獣王だ！',
    timestamp: 1457458183889,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'kingkong',
    message: 'I like climbing tall buildings. But man, watch out for those planes!',
    timestamp: 1457458195218,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'godzilla',
    message: 'Things seem to be getting rather rough for #Gamera these days!',
    timestamp: 1457458204971,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'kingkong',
    message: 'godzilla - Just wait till we meet on the big screen again!',
    timestamp: 1457458215012,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'kaijuking',
    message: 'Cannot wait to get a new job!',
    timestamp: 1457458294422,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'gamera',
    message: 'Go see my new movie! Coming soon! 2016!',
    timestamp: 1457458304231,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'mothra',
    message: 'I am going on vacation. Infant Island here I come!',
    timestamp: 1457458316081,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  }
];

var allUsers = [
  {
    username: 'kaijuking',
    realname: 'Michael Field',
    followers:['godzilla', 'kingkong'],
    following: ['godzilla'],
    roarCount: 2,
    profileImage: 'images/osakaflu.jpg',
    headerImage: 'url(\'images/yokohama_fuji.jpg\')',
    isActiveUser: false,
    password: 'kaijuking'
  },
  {
    username: 'godzilla',
    realname: 'ゴジラ',
    followers:['kaijuking', 'kingkong'],
    following: ['kaijuking', 'kingkong'],
    roarCount: 2,
    profileImage: 'images/godzilla profile.jpg',
    headerImage: 'url(\'images/godzilla header.png\')',
    isActiveUser: false,
    password: 'godzilla'
  },
  {
    username: 'kingkong',
    realname: 'King Kong',
    followers: ['godzilla'],
    following: ['kaijuking', 'godzilla'],
    roarCount: 2,
    profileImage: 'images/kingkong.jpg',
    headerImage: 'url(\'images/kongheader.jpg\')',
    isActiveUser: false,
    password: 'kingkong'
  },
  {
    username: 'mothra',
    realname: 'モスラ',
    followers: [],
    following: [],
    roarCount: 0,
    profileImage: 'images/mothra profile.jpg',
    headerImage: 'url(\'images/mothra header.jpg\')',
    isActiveUser: false,
    password: 'mothra'
  },
  {
    username: 'gamera',
    realname: 'ガメラ',
    followers: [],
    following: [],
    roarCount: 0,
    profileImage: 'images/gamera profile.jpg',
    headerImage: 'url(\'images/gamera header.jpg\')',
    isActiveUser: false,
    password: 'gamera'
  }
];

var activeUser = '';


var roar = function(username, message, timestamp) {
  this.username = username;
  this.message = message;
  this.timestamp = timestamp;
};

/*Setup process*/
document.addEventListener('DOMContentLoaded', function(event){
  console.log('DOM has fully loaded and parsed.');
  randomRoar();
});

var loginButton = document.getElementById('roar-login-button');
loginButton.addEventListener('click', function(event) {

  var username = document.getElementById('user-username');
  var usernameValue = username.value;

  var password = document.getElementById('user-password');
  var passwordValue = password.value;

  console.log('the username is: ' + usernameValue);
  console.log('the password is: ' + passwordValue);

  if(usernameValue != null && passwordValue != null) {
    for(var i = 0; i < allUsers.length; i++) {
      if(allUsers[i].username === usernameValue && allUsers[i].password === passwordValue) {

        setActiveUser(usernameValue);
        activeUser = getActiveUser();
        setupActiveUserPanel(usernameValue);
        setupFollowers(usernameValue);
        setupFollowing(usernameValue);
        displayAllRoars();
        setupActiveUserTimeline(usernameValue);

        var test = document.getElementById('all-roars');
        var nodeListLength = test.getElementsByClassName('panel panel-info').length;
        console.log('the all roar node list length is: '+ nodeListLength);

        var loginPage = document.getElementById('roar-login-page');
        var theTimeline = document.getElementById('roar-timeline');

        loginPage.setAttribute('class', 'container-fluid hidden');
        theTimeline.setAttribute('class', 'container-fluid show');

      } else {
        var warning = document.getElementById('login-warning-alert');
        warning.setAttribute('class', 'alert alert-warning alert-dismissible show');
      };
    };
  };

  myLinks();
});


/*GET 'Post Roar' BUTTON's 'submit' EVENT ON FORM*/
var myForm = document.getElementById('form-createRoar');
myForm.addEventListener('submit', function(event){
  event.preventDefault();

  var time = event.timeStamp;
  var activeUser = getActiveUser();
  var message = document.getElementById('new-roar-message');
  var roarMessage = message.value;
  var location = ['all-roars', 'activeuser-timeline']

  createRoar(activeUser, roarMessage, time);
  for(var i = 0; i < location.length; i++) {
    var isDone = postRoar(activeUser, roarMessage, location[i]);
    if(isDone == true) {
      continue;
    };
  };
  updateRoarCount(activeUser);

  console.log('the post roar button was clicked');
  console.log('the Date/Timestamp is: ' + time);
  console.log('the active user is: ' + getActiveUser());
  console.log('the new roar message is: ' + roarMessage);
  console.log(allRoars);
  console.log(allUsers);

  myLinks();

}, false);

/*Create a new tweet object and push it into the allTweets array*/
function createRoar(username, roarMessage, timestamp) {
  var newRoar = new roar(username, roarMessage, timestamp);
  allRoars.push(newRoar);
};


//Saving for later use when it comes to displaying inactive user's timeline
// create an array of activeUser's "following" roars
// create an array of actieUser's roars
// combine both arrays into one arrays
// sort combined array by date/timestamp   (fyi - date/time stamp: Date.now())
// make the tweet element
// display the tweet element


/*-----------------------------------------------------------------*/
function randomRoar() {
  var length = allRoars.length;
  console.log('allRoars length is: ' + length);

  if(length != null) {
    var random = Math.floor((Math.random() * (length-1)) + 1);
    console.log('random number is: ' + random);
    console.log(allRoars[random].message);
    var theMessage = allRoars[random].message;
    var roar = document.getElementById('random-roar-message');
    var roarMessage = document.createTextNode(theMessage);
    roar.appendChild(roarMessage);
    var theUsername = allRoars[random].username;

    for(var i = 0; i < allUsers.length; i++) {
      if(allUsers[i].username === theUsername) {
        var realname = document.getElementById('random-roar-realname');
        var rName = document.createTextNode(allUsers[i].username);
        realname.appendChild(rName);

        var profilePic = document.getElementById('random-roar-profile-pic');
        var pictureURL = allUsers[i].profileImage;
        profilePic.setAttribute('src', pictureURL);
      };
    };

    var username = document.getElementById('random-roar-username');
    var uName = document.createTextNode('@' + theUsername);
    username.appendChild(uName);
  };
};

function getActiveUser() {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].isActiveUser == true){
      return allUsers[i].username;
    };
  };
};

function setActiveUser(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username){
      allUsers[i].isActiveUser = true;
      console.log(username + ' is now the active user');
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

function updateRoarCount(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      allUsers[i].roarCount++;
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

function setupActiveUserPanel(username) {
  var headerImage = document.getElementById('activeuser-panel-header');
  var headerURL = getHeaderImageUrl(username);
  console.log('user header image url is: ' + headerURL);
  headerImage.style.backgroundImage = headerURL;

  var profileImage = document.getElementById('activeuser-panel-profile-pic');
  console.log('user profile image url is: ' + getProfileImageUrl(username));
  var profileURL = getProfileImageUrl(username);
  profileImage.setAttribute('src', profileURL);

  var realName = document.getElementById('activeuser-panel-realname');
  var userName = document.getElementById('activeuser-panel-username');
  var realText = document.createTextNode(getRealName(username));
  var userText = document.createTextNode('@' + username);
  realName.appendChild(realText);
  userName.appendChild(userText);
};

function setupFollowers(username) {
  var numFollowers = 0;
  var theFollowers = [];

  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      numFollowers = allUsers[i].followers.length;
      console.log('The followers of ' + username + ' are: ' + allUsers[i].followers);
      theFollowers = allUsers[i].followers;
    };
  };
  console.log(username + ' has ' + numFollowers + ' followers');
  console.log(theFollowers);

  var test = document.getElementById('activeuser-followers');
  var nodelistLength = test.getElementsByTagName('a').length;
  console.log('the nodelist length is: ' + nodelistLength);

  var lgFollowers = document.getElementById('numFollowers');
  var totalFollowers = document.createTextNode(getTotalFollowers(username) + ' Followers');
  lgFollowers.appendChild(totalFollowers);

  var lgFollowing = document.getElementById('numFollowing');
  var totalFollowing = document.createTextNode(getTotalFollowing(username) + ' Following');
  lgFollowing.appendChild(totalFollowing);

  var difference = numFollowers - nodelistLength;
  if(numFollowers != nodelistLength){
    for(var i = 0; i < difference; i++) {
      setupFriends(theFollowers[i], 'activeuser-followers');
    };
  };
};

function setupFollowing(username) {
  var numFollowing = 0;
  var theFollowing = [];

  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      numFollowing = allUsers[i].following.length;
      console.log('Those following ' + username + ' are: ' + allUsers[i].following);
      theFollowing = allUsers[i].following;
    };
  };

  console.log(username + ' is following ' + numFollowing + ' users');
  console.log(theFollowing);

  var test = document.getElementById('activeuser-following');
  var nodelistLength = test.getElementsByTagName('a').length;
  console.log('the nodelist length is: ' + nodelistLength);

  var difference = numFollowing - nodelistLength;
  if(numFollowing != nodelistLength) {
    for(var i = 0; i < difference; i++) {
      setupFriends(theFollowing[i], 'activeuser-following');
    };
  };
};

function setupActiveUserTimeline(username) {
  var numRoars = 0;
  var tmpArray = [];

  for(var i = 0; i < allRoars.length; i++) {
    if(allRoars[i].username === username) {
      tmpArray.push(allRoars[i].message);
      numRoars++;
    };
  };

  console.log('the tmpArray has this many roars: ' + tmpArray.length);
  console.log(tmpArray);
  console.log(numRoars);

  var test = document.getElementById('activeuser-timeline');
  var nodeListLength = test.getElementsByClassName('panel panel-info').length;
  console.log('the active user has this many roar nodes: '+ nodeListLength);

  var theRealName = getRealName(username);
  console.log('The real name is: ' + theRealName);
  var theUserName = getUserName(username);
  console.log('The user name is: ' + theUserName);
  var profileImageURL = getProfileImageUrl(username);
  console.log('The profile image URL is: ' + profileImageURL);
  var headerImageURL = getHeaderImageUrl(username);
  console.log('The header image URL is: ' + headerImageURL);
  var difference = numRoars - nodeListLength;

  setupHeader(theUserName, theRealName, headerImageURL, profileImageURL, 'activeuser-timeline');

  var test = document.getElementById('activeuser-timeline');
  var nodeListLength = test.getElementsByClassName('panel panel-info').length;
  console.log('the active user has this many roar nodes: '+ nodeListLength);
  var difference = numRoars - nodeListLength;

  if(difference != 0) {
    for(var i = nodeListLength; i < numRoars; i++) {
      var roarMessage = tmpArray[i];
      setupRoars(theUserName, theRealName, profileImageURL, roarMessage, 'activeuser-timeline');
    };
  };
};

function setupInactiveUserTimeline(username) {
  var numRoars = 0;
  var tmpArray = [];

  for(var i = 0; i < allRoars.length; i++) {
    if(allRoars[i].username === username) {
      tmpArray.push(allRoars[i].message);
      numRoars++;
    };
  };

  console.log('the tmpArray has this many roars: ' + tmpArray.length);
  console.log(tmpArray);
  console.log(numRoars);

  var test = document.getElementById('inactiveuser-timeline');
  var nodeListLength = test.getElementsByClassName('panel panel-info').length;
  console.log('the inactive user has this many roar nodes: '+ nodeListLength);

  var theUserName = getUserName(username);
  console.log('The user name is: ' + theUserName);

  var theRealName = getRealName(username);
  console.log('The real name is: ' + theRealName);

  var headerImageURL = getHeaderImageUrl(username);
  console.log('The header image URL is: ' + headerImageURL);

  var profileImageURL = getProfileImageUrl(username);
  console.log('The profile image URL is: ' + profileImageURL);

  var friendContainer = document.createElement('div');
  friendContainer.setAttribute('id', 'inactiveuser-timeline-container');
  var parent = document.getElementById('inactiveuser-timeline');
  parent.appendChild(friendContainer);

  setupHeader(theUserName, theRealName, headerImageURL, profileImageURL, 'inactiveuser-timeline-container');

  var difference = numRoars - nodeListLength;
  if(difference != 0) {
    for(var i = nodeListLength; i < numRoars; i++) {
      var roarMessage = tmpArray[i];
      setupRoars(theUserName, theRealName, profileImageURL, roarMessage, 'inactiveuser-timeline-container');
    };
  };
};

function postRoar(username, message, location) {

  var theMessage = message;
  var theUserName = username;
  var theRealName = getRealName(username);
  var profileImageURL = getProfileImageUrl(username);
  var theLocation = location;

  generateRoar(theUserName, theRealName, profileImageURL, theMessage, theLocation);
};

function displayAllRoars(){
  var length = allRoars.length;

  var test = document.getElementById('all-roars');
  var nodeListLength = test.getElementsByClassName('panel panel-info').length;
  console.log('the all roar node list length is: '+ nodeListLength);

  var difference = length - nodeListLength;
  if(difference != 0) {
    for(var i = nodeListLength; i < length; i++) {

      var theRealName = getRealName(allRoars[i].username);
      var theUserName = getUserName(allRoars[i].username);
      var profileImageURL = getProfileImageUrl(allRoars[i].username);

      var profileImage = document.createElement('img');
      profileImage.setAttribute('class', 'media-object profile-pic');
      profileImage.setAttribute('data-id', theUserName);
      profileImage.setAttribute('src', profileImageURL);
      profileImage.setAttribute('alt', '...');

      var aLink = document.createElement('a');
      aLink.setAttribute('href', '#');
      aLink.setAttribute('data-id', theUserName);
      aLink.appendChild(profileImage);

      var mediaImage = document.createElement('div');
      mediaImage.setAttribute('class', 'media-left');
      mediaImage.appendChild(aLink);

      var spanRealName = document.createElement('span');
      spanRealName.setAttribute('class', 'realname');
      spanRealName.setAttribute('data-id', 'realname');
      var textRealName = document.createTextNode(theRealName);
      spanRealName.appendChild(textRealName);

      var spanUserName = document.createElement('span');
      spanUserName.setAttribute('class', 'username');
      spanUserName.setAttribute('data-id', 'username');
      var textUserName = document.createTextNode('@' + theUserName);
      spanUserName.appendChild(textUserName);

      var spanReRoar = document.createElement('span');
      spanReRoar.setAttribute('class', 're-roar');
      spanReRoar.setAttribute('data-id', 're-roar');
      var reRoarIcon = document.createElement('i');
      reRoarIcon.setAttribute('class', 'fa fa-retweet');
      spanReRoar.appendChild(reRoarIcon);

      var spanFavorite = document.createElement('span');
      spanFavorite.setAttribute('class', 'favorite');
      spanFavorite.setAttribute('data-id', 'favorite');
      var favoriteIcon = document.createElement('i');
      favoriteIcon.setAttribute('class', 'fa fa-heart-o');
      spanFavorite.appendChild(favoriteIcon);

      var mediaHeading1 = document.createElement('h4');
      mediaHeading1.setAttribute('class', 'media-heading');
      mediaHeading1.appendChild(spanRealName);
      mediaHeading1.appendChild(spanUserName);
      mediaHeading1.appendChild(spanReRoar);
      mediaHeading1.appendChild(spanFavorite);

      var spanRoarMessage = document.createElement('span');
      spanRoarMessage.setAttribute('class', 'roar-message');
      spanRoarMessage.setAttribute('data-id', 'roar-message');
      var textRoarMessage = document.createTextNode(allRoars[i].message);
      spanRoarMessage.appendChild(textRoarMessage);

      var mediaHeading2 = document.createElement('h4');
      mediaHeading2.setAttribute('class', 'media-heading');
      mediaHeading2.appendChild(spanRoarMessage);

      var mediaBody = document.createElement('div');
      mediaBody.setAttribute('class', 'media-body');
      mediaBody.appendChild(mediaHeading1);
      mediaBody.appendChild(mediaHeading2);

      var divMedia = document.createElement('div');
      divMedia.setAttribute('class', 'media');
      divMedia.appendChild(mediaImage);
      divMedia.appendChild(mediaBody);

      var panelBody = document.createElement('div');
      panelBody.setAttribute('class', 'panel-body');
      panelBody.appendChild(divMedia);

      var panel = document.createElement('div');
      panel.setAttribute('class', 'panel panel-info');
      panel.appendChild(panelBody);

      var parent = document.getElementById('all-roars');
      parent.appendChild(panel);
    };
  };
};

function setupFriends(username, location) {
  var profileImg = document.createElement('img');
  profileImg.setAttribute('class', 'profile-pic');
  profileImg.setAttribute('data-id', username);
  profileImg.setAttribute('src', getProfileImageUrl(username));
  profileImg.setAttribute('alt', '...');

  var imgDiv = document.createElement('div');
  imgDiv.setAttribute('class', 'media-left');
  imgDiv.setAttribute('data-id', username);
  imgDiv.appendChild(profileImg);

  var bodyDiv = document.createElement('div');
  bodyDiv.setAttribute('class', 'media-body');
  imgDiv.setAttribute('data-id', username);
  var textUsername = document.createTextNode(username);
  bodyDiv.appendChild(textUsername);

  var mediaDiv = document.createElement('div');
  mediaDiv.setAttribute('class', 'media');
  mediaDiv.setAttribute('data-id', username);
  mediaDiv.appendChild(imgDiv);
  mediaDiv.appendChild(bodyDiv);

  var aElement = document.createElement('a');
  aElement.setAttribute('href', '#');
  aElement.setAttribute('class', 'list-group-item');
  aElement.setAttribute('data-id', username);
  aElement.appendChild(mediaDiv);

  var parent = document.getElementById(location);
  parent.appendChild(aElement);
};

function setupHeader(theUserName, theRealName, headerImageURL, profileImageURL, location) {
  var pImage = document.createElement('img');
  pImage.setAttribute('class', 'img-thumbnail profile-pic');
  pImage.setAttribute('src', profileImageURL);
  pImage.setAttribute('alt', '...');

  var listGroupHeader = document.createElement('li');
  listGroupHeader.setAttribute('class', 'list-group-item');
  listGroupHeader.setAttribute('id', 'user-timeline-header-image');
  listGroupHeader.style.backgroundImage = headerImageURL;
  listGroupHeader.appendChild(pImage);

  var lgSpanRealName = document.createElement('span');
  lgSpanRealName.setAttribute('class', 'realname');
  var textNode1 = document.createTextNode(theRealName);
  lgSpanRealName.appendChild(textNode1);

  var lgSpanUserName = document.createElement('span');
  lgSpanUserName.setAttribute('class', 'username');
  var textNode2 = document.createTextNode('@' + theUserName);
  lgSpanUserName.appendChild(textNode2);

  var h4Header = document.createElement('h4');
  h4Header.setAttribute('class', 'media-heading');
  h4Header.appendChild(lgSpanRealName);
  h4Header.appendChild(lgSpanUserName);

  var liInfo = document.createElement('li');
  liInfo.setAttribute('class', 'list-group-item');
  liInfo.appendChild(h4Header);

  var ulHeader = document.createElement('ul');
  ulHeader.setAttribute('class', 'list-group');
  ulHeader.appendChild(listGroupHeader);
  ulHeader.appendChild(liInfo);

  var parent = document.getElementById(location);
  parent.appendChild(ulHeader);
};

function setupRoars(theUserName, theRealName, profileImageURL, roarMessage, location) {
  var profileImage = document.createElement('img');
  profileImage.setAttribute('class', 'media-object profile-pic');
  profileImage.setAttribute('data-id', theUserName);
  profileImage.setAttribute('src', profileImageURL);
  profileImage.setAttribute('alt', '...');

  var aLink = document.createElement('a');
  aLink.setAttribute('href', '#');
  aLink.setAttribute('data-id', theUserName);
  aLink.appendChild(profileImage);

  var imageDiv = document.createElement('div');
  imageDiv.setAttribute('data-id', theUserName);
  imageDiv.appendChild(profileImage);

  var mediaImage = document.createElement('div');
  mediaImage.setAttribute('class', 'media-left');
  if(location === 'activeuser-timeline') {
      mediaImage.appendChild(imageDiv);
  };

  if(location === 'inactiveuser-timeline-container') {
      mediaImage.appendChild(imageDiv);
  };

  if(location === 'all-roars') {
      mediaImage.appendChild(aLink);
  };

  var spanRealName = document.createElement('span');
  spanRealName.setAttribute('class', 'realname');
  var textRealName = document.createTextNode(theRealName);
  spanRealName.appendChild(textRealName);

  var spanUserName = document.createElement('span');
  spanUserName.setAttribute('class', 'username');
  var textUserName = document.createTextNode('@' + theUserName);
  spanUserName.appendChild(textUserName);

  var spanReRoar = document.createElement('span');
  spanReRoar.setAttribute('class', 're-roar');
  var reRoarIcon = document.createElement('i');
  reRoarIcon.setAttribute('class', 'fa fa-retweet');
  spanReRoar.appendChild(reRoarIcon);

  var spanFavorite = document.createElement('span');
  spanFavorite.setAttribute('class', 'favorite');
  var favoriteIcon = document.createElement('i');
  favoriteIcon.setAttribute('class', 'fa fa-heart-o');
  spanFavorite.appendChild(favoriteIcon);

  var mediaHeading1 = document.createElement('h4');
  mediaHeading1.setAttribute('class', 'media-heading');
  mediaHeading1.appendChild(spanRealName);
  mediaHeading1.appendChild(spanUserName);
  mediaHeading1.appendChild(spanReRoar);
  mediaHeading1.appendChild(spanFavorite);

  var spanRoarMessage = document.createElement('span');
  spanRoarMessage.setAttribute('class', 'roar-message');
  var textRoarMessage = document.createTextNode(roarMessage);
  spanRoarMessage.appendChild(textRoarMessage);

  var mediaHeading2 = document.createElement('h4');
  mediaHeading2.setAttribute('class', 'media-heading');
  mediaHeading2.appendChild(spanRoarMessage);

  var mediaBody = document.createElement('div');
  mediaBody.setAttribute('class', 'media-body');
  mediaBody.appendChild(mediaHeading1);
  mediaBody.appendChild(mediaHeading2);

  var divMedia = document.createElement('div');
  divMedia.setAttribute('class', 'media');
  divMedia.appendChild(mediaImage);
  divMedia.appendChild(mediaBody);

  var panelBody = document.createElement('div');
  panelBody.setAttribute('class', 'panel-body');
  panelBody.appendChild(divMedia);

  var panel = document.createElement('div');
  panel.setAttribute('class', 'panel panel-info');
  panel.setAttribute('data-id', 'panel-data-id');
  panel.appendChild(panelBody);

  var parent = document.getElementById(location);
  parent.appendChild(panel);
};

function generateRoar(theUserName, theRealName, profileImageURL, theMessage, location) {
  console.log('the location in the generateRoar function is: ' + location);
  var profileImage = document.createElement('img');
  profileImage.setAttribute('class', 'media-object profile-pic');
  profileImage.setAttribute('data-id', theUserName);
  profileImage.setAttribute('src', profileImageURL);
  profileImage.setAttribute('alt', '...');

  var mediaImage = document.createElement('div');
  mediaImage.setAttribute('class', 'media-left');

  if(location === 'all-roars') {
    var aLink = document.createElement('a');
    aLink.setAttribute('href', '#');
    aLink.setAttribute('data-id', theUserName);
    aLink.appendChild(profileImage);

    mediaImage.appendChild(aLink);
  };

  if(location === 'activeuser-timeline') {
    var imageDiv = document.createElement('div');
    imageDiv.setAttribute('data-id', theUserName);
    imageDiv.appendChild(profileImage);

    mediaImage.appendChild(imageDiv);
  };

  var spanRealName = document.createElement('span');
  spanRealName.setAttribute('class', 'realname');
  var textRealName = document.createTextNode(theRealName);
  spanRealName.appendChild(textRealName);

  var spanUserName = document.createElement('span');
  spanUserName.setAttribute('class', 'username');
  var textUserName = document.createTextNode('@' + theUserName);
  spanUserName.appendChild(textUserName);

  var spanReRoar = document.createElement('span');
  spanReRoar.setAttribute('class', 're-roar');
  var reRoarIcon = document.createElement('i');
  reRoarIcon.setAttribute('class', 'fa fa-retweet');
  spanReRoar.appendChild(reRoarIcon);

  var spanFavorite = document.createElement('span');
  spanFavorite.setAttribute('class', 'favorite');
  var favoriteIcon = document.createElement('i');
  favoriteIcon.setAttribute('class', 'fa fa-heart-o');
  spanFavorite.appendChild(favoriteIcon);

  var mediaHeading1 = document.createElement('h4');
  mediaHeading1.setAttribute('class', 'media-heading');
  mediaHeading1.appendChild(spanRealName);
  mediaHeading1.appendChild(spanUserName);
  mediaHeading1.appendChild(spanReRoar);
  mediaHeading1.appendChild(spanFavorite);

  var spanRoarMessage = document.createElement('span');
  spanRoarMessage.setAttribute('class', 'roar-message');
  var textRoarMessage = document.createTextNode(theMessage);
  spanRoarMessage.appendChild(textRoarMessage);

  var mediaHeading2 = document.createElement('h4');
  mediaHeading2.setAttribute('class', 'media-heading');
  mediaHeading2.appendChild(spanRoarMessage);

  var mediaBody = document.createElement('div');
  mediaBody.setAttribute('class', 'media-body');
  mediaBody.appendChild(mediaHeading1);
  mediaBody.appendChild(mediaHeading2);

  var divMedia = document.createElement('div');
  divMedia.setAttribute('class', 'media');
  divMedia.appendChild(mediaImage);
  divMedia.appendChild(mediaBody);

  var panelBody = document.createElement('div');
  panelBody.setAttribute('class', 'panel-body');
  panelBody.appendChild(divMedia);

  var panel = document.createElement('div');
  panel.setAttribute('class', 'panel panel-info');
  panel.appendChild(panelBody);

  var parentActiveUser = document.getElementById(location);
  parentActiveUser.appendChild(panel);

  return true;
};

function myLinks() {
  var myLinks = document.getElementsByTagName('a');
  console.log('the length of myLinks is: ' + myLinks.length);
  for(var i = 0; i < myLinks.length; i++) {
    myLinks[i].addEventListener('click', function(event) {
      event.preventDefault();
      console.log(event.target.parentNode);
      var dataID = event.target.parentNode.getAttribute('data-id');
      console.log('the data-id is: ' + dataID);
      if(dataID != null && dataID === activeUser) {
        $('#tab-activeuser-timeline a[href="#activeuser-timeline"]').tab('show');
      }
      if(dataID != null && dataID != activeUser) {
        timelinePrep();
        setupInactiveUserTimeline(dataID);
        var friend = document.getElementById('tab-inactiveuser-timeline');
        friend.setAttribute('class', 'show');
        $('#tab-inactiveuser-timeline a[href="#inactiveuser-timeline"]').tab('show');
      }
    });
  };
};

function timelinePrep() {
  var parent = document.getElementById('inactiveuser-timeline');
  console.log('the parent node is: ' + parent);
  var firstChild = parent.firstElementChild;
  console.log('the first child node is: ' + firstChild);
  if(firstChild != null){
    var garbage = parent.removeChild(firstChild);
  };
};

function sortRoars() {
  //To Do - sort roars by date/timestamp
};

function filterRoars() {
  //To Do - filter roars onto the timeline and only show posts from people the active user is currently following
};
