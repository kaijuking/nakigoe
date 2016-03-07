'use-strict';

/*SETUP DEFAULT VALUES ON DOCUMENT LOAD*/
var allRoars = [
  {
    username: 'kaijuking',
    message: '怪獣だ。海の中から。ゴジラ来た。',
    timestamp: 1
  },
  {
    username: 'godzilla',
    message: '俺は怪獣王だ！',
    timestamp: 2
  },
  {
    username: 'kingkong',
    message: 'I like climbing tall buildings. But man, watch out for those planes!',
    timestamp: 3
  },
  {
    username: 'godzilla',
    message: 'Things seem to be getting rather rough for #Gamera these days!',
    timestamp: 4
  },
  {
    username: 'kingkong',
    message: 'godzilla - Just wait till we meet on the big screen again!',
    timestamp: 5
  },
  {
    username: 'kaijuking',
    message: 'Cannot wait to get a new job!',
    timestamp: 6
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
  }
];

var activeUser = '';
//var inactiveUser = '';

var roar = function(username, message) {
  this.username = username;
  this.message = message;
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
        setupActiveUserFollowers(usernameValue);
        setupActiveUserFollowing(usernameValue);
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
});


/*GET 'Post Roar' BUTTON's 'submit' EVENT ON FORM*/
var myForm = document.getElementById('form-createRoar');
myForm.addEventListener('submit', function(event){
  event.preventDefault();
  console.log('post roar button clicked');
  console.log(getActiveUser());

  var number = event.timeStamp;
  console.log('Date/Timestamp = ' + number);

  // setupInactiveUserTimeline('kingkong');
  var inactiveuserTab = document.getElementById('tab-inactiveuser-timeline');
  inactiveuserTab.setAttribute('class', 'show');
  var inactiveuserTimeline = document.getElementById('inactiveuser-timeline');
  inactiveuserTimeline.setAttribute('class', 'tab-pane show');



  // sortRoars();
  // var message = document.getElementById('newTweet');
  // var tweetMessage = message.value;

  // createRoar(activeUser, tweetMessage);
  // displayTweet(activeUser, tweetMessage, 'activeuser');
  // updateRoarCount(activeUser);

}, false);

/*Create a new tweet object and push it into the allTweets array*/
function createRoar(username, tweetMessage) {
  var newTweet = new tweet(username, tweetMessage);
  allRoars.push(newTweet);
};


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

function setupActiveUserFollowers(username) {
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
      var aElement = document.createElement('a');
      aElement.setAttribute('href', '#');
      aElement.setAttribute('class', 'list-group-item');
      aElement.setAttribute('data-id', theFollowers[i]);
      var aText = document.createTextNode(theFollowers[i]);
      aElement.appendChild(aText);
      var parent = document.getElementById('activeuser-followers');
      parent.appendChild(aElement);
    };
  };

};

function setupActiveUserFollowing(username) {
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
  if(numFollowing != nodelistLength){
    for(var i = 0; i < difference; i++) {
      var aElement = document.createElement('a');
      aElement.setAttribute('href', '#');
      aElement.setAttribute('class', 'list-group-item');
      aElement.setAttribute('data-id', theFollowing[i]);
      var aText = document.createTextNode(theFollowing[i]);
      aElement.appendChild(aText);
      var parent = document.getElementById('activeuser-following');
      parent.appendChild(aElement);
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

  var parent = document.getElementById('activeuser-timeline');
  parent.appendChild(ulHeader);


  if(difference != 0) {
    for(var i = nodeListLength; i < numRoars; i++) {

      var profileImage = document.createElement('img');
      profileImage.setAttribute('class', 'media-object profile-pic');
      profileImage.setAttribute('data-id', 'profile-pic');
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
      var textRoarMessage = document.createTextNode(tmpArray[i]);
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

      var parent = document.getElementById('activeuser-timeline');
      parent.appendChild(panel);
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

  var theRealName = getRealName(username);
  console.log('The real name is: ' + theRealName);
  var theUserName = getUserName(username);
  console.log('The user name is: ' + theUserName);
  var profileImageURL = getProfileImageUrl(username);
  console.log('The profile image URL is: ' + profileImageURL);
  var headerImageURL = getHeaderImageUrl(username);
  console.log('The header image URL is: ' + headerImageURL);
  var difference = numRoars - nodeListLength;

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

  var parent = document.getElementById('inactiveuser-timeline');
  parent.appendChild(ulHeader);


  if(difference != 0) {
    for(var i = nodeListLength; i < numRoars; i++) {

      var profileImage = document.createElement('img');
      profileImage.setAttribute('class', 'media-object profile-pic');
      profileImage.setAttribute('data-id', 'profile-pic');
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
      var textRoarMessage = document.createTextNode(tmpArray[i]);
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

      var parent = document.getElementById('inactiveuser-timeline');
      parent.appendChild(panel);
    };
  };
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
      profileImage.setAttribute('data-id', 'profile-pic');
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

function sortRoars(){
//   var tmpArray = [];
//   for(var i = 0; i < allRoars.length; i++){
//     if(allRoars[i].username === 'kaijuking'){
//       tmpArray = allRoars[i];
//     }
//   };
//   console.log('tmpArray before sort: ' + tmpArray);
//
//   tmpArray.sort(function(a,b){
//     if(a.timestamp > b.timestamp) {
//       return 1;
//     }
//     if(a.timestamp < b.timestamp) {
//       return 01;
//     }
//     return 0;
//   });
//
//     console.log('tmpArray after sort: ' + tmpArray);
//
};
