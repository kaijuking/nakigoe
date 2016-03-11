'use-strict';

/*SETUP DEFAULT VALUES ON DOCUMENT LOAD*/
var allRoars = [
  {
    username: 'kaijuking',
    message: '怪獣だ。海の中から。ゴジラ来た。',
    profileimage: 'images/osakaflu.jpg',
    timestamp: 1457458167016,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'godzilla',
    message: '俺は怪獣王だ！',
    profileimage: 'images/godzilla profile.jpg',
    timestamp: 1457458183889,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'kingkong',
    message: 'I like climbing tall buildings. But man, watch out for those planes!',
    profileimage: 'images/kingkong.jpg',
    timestamp: 1457458195218,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'godzilla',
    message: 'Things seem to be getting rather rough for #Gamera these days!',
    profileimage: 'images/godzilla profile.jpg',
    timestamp: 1457458204971,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'kingkong',
    message: 'godzilla - Just wait till we meet on the big screen again!',
    profileimage: 'images/kingkong.jpg',
    timestamp: 1457458215012,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'kaijuking',
    message: 'Cannot wait to get a new job!',
    profileimage: 'images/osakaflu.jpg',
    timestamp: 1457458294422,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'gamera',
    message: 'Go see my new movie! Coming soon! 2016!',
    profileimage: 'images/gamera profile.jpg',
    timestamp: 1457458304231,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'mothra',
    message: 'I am going on vacation. Infant Island here I come!',
    profileimage: 'images/mothra profile.jpg',
    timestamp: 1457458316081,
    sharedcount: 0,
    sharedby: [],
    favoredcount: 0,
    favoredby: []
  },
  {
    username: 'HeroOfTime',
    message: 'Have you seen the Tri-Force?',
    profileimage: 'images/linkprofile.jpg',
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
    followers:['godzilla', 'kingkong', 'HeroOfTime'],
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
    followers:['kaijuking', 'kingkong', 'HeroOfTime'],
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
    followers: ['godzilla', 'HeroOfTime'],
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
    followers: ['HeroOfTime'],
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
    followers: ['HeroOfTime'],
    following: [],
    roarCount: 0,
    profileImage: 'images/gamera profile.jpg',
    headerImage: 'url(\'images/gamera header.jpg\')',
    isActiveUser: false,
    password: 'gamera'
  },
  {
    username: 'HeroOfTime',
    realname: 'link',
    followers: ['gamera'],
    following: ['gamera', 'kaijuking', 'godzilla', 'mothra', 'kingkong'],
    roarCount: 0,
    profileImage: 'images/linkprofile.jpg',
    headerImage: 'url(\'images/linkheader.jpg\')',
    isActiveUser: false,
    password: 'link'
  }
];

var activeUser = '';


var Roar = function(username, message, profileimage, timestamp) {
  this.username = username;
  this.message = message;
  this.profileimage = profileimage
  this.timestamp = timestamp;
};

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

  if(usernameValue != null && passwordValue != null) {
    for(var i = 0; i < allUsers.length; i++) {
      if(allUsers[i].username === usernameValue && allUsers[i].password === passwordValue) {

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

  activeUser = setActiveUser(usernameValue);
  setupUser(usernameValue);

});

// document.addEventListener('click', function(event) {
//   // console.log(event.target);
//
//   var myLinks = document.getElementsByTagName('a');
//   // console.log('the length of myLinks is: ' + myLinks.length);
//
//   for(var i = 0; i < myLinks.length; i++) {
//     myLinks[i].addEventListener('click', function(event) {
//       event.preventDefault();
//       console.log(event.target.parentNode);
//       var dataID = event.target.parentNode.getAttribute('data-id');
//       var id = event.target.parentNode.getAttribute('id');
//       console.log('the data-id is: ' + dataID);
//       console.log('the active user is: ' + activeUser);
//       if(dataID != null && dataID === activeUser && dataID != 'logout') {
//         $('#tab-activeuser-timeline a[href="#activeuser-timeline"]').tab('show');
//       }
//       if(dataID != null && dataID != activeUser && dataID != 'logout') {
//         var friend = document.getElementById('tab-inactiveuser-timeline');
//         friend.setAttribute('class', 'show');
//         $('#tab-inactiveuser-timeline a[href="#inactiveuser-timeline"]').tab('show');
//         clearTimeline();
//         console.log('dataID dataID');
//         console.log('the dataID is: ' + dataID);
//         setupInactiveUserTimeline(dataID);
//       }
//     });
//   };
//
//   var dataID = event.target.getAttribute('data-id');
//   if(dataID != null){
//     event.preventDefault();
//     var stringArray = dataID.split('-',2);
//     // console.log(stringArray);
//     if(stringArray[0] === 'follow'){
//       // console.log('you are not following user: ' + stringArray[1]);
//       event.target.textContent = 'following';
//       event.target.setAttribute('data-id', 'following-' + stringArray[1]);
//       console.log('you are now following user: ' + stringArray[1]);
//       addFollowing(activeUser, stringArray[1]);
//       // setupFollowing(activeUser);
//       // setupFriends(stringArray[1], 'activeuser-following-list');
//       // updateFollowing(activeUser, stringArray[1]);
//       var following = document.getElementById('numFollowing');
//       var followingText = getTotalFollowing(activeUser) + ' Following';
//       following.textContent = followingText;
//     }
//     if(stringArray[0] === 'following'){
//       event.target.textContent = 'follow';
//       event.target.setAttribute('data-id', 'follow-' + stringArray[1]);
//       console.log('you are no longer following user: ' + stringArray[1]);
//
//       var child = document.getElementById('activeuser-following-container')
//       console.log(child);
//       var test = child.childNodes;
//       console.log(test.length);
//
//       for(var i = 0; i < test.length; i++) {
//         console.log(test[i]);
//         var v = test[i].getAttribute('data-id');
//         if(v === stringArray[1]){
//           console.log('ewads;lkfja;sldkfja;sd')
//           child.removeChild(test[i]);
//         }
//       }
//       removeFollowing(activeUser, stringArray[1]);
//       var num = document.getElementById('numFollowing');
//       num.textContent = '';
//
//       var following = document.getElementById('numFollowing');
//       var followingText = getTotalFollowing(activeUser) + ' Following';
//       following.textContent = followingText;
//     }
//   };
//
// });



/*Create a new tweet object and push it into the allTweets array*/
function createRoar(username, roarMessage, profileimage, timestamp) {
  var newRoar = new Roar(username, roarMessage, profileimage, timestamp);
  allRoars.push(newRoar);
};

document.addEventListener('click', function(event) {

  event.preventDefault();
  var theTarget = event.target;

  var myLinks = document.getElementsByTagName('a');
  var timeline = document.getElementById('all-roars');
  var activeuserProfile = document.getElementById('activeuser-timeline');
  var inactiveuserProfile = document.getElementById('inactiveuser-timeline');

  // console.log(theTarget);
  if(theTarget.getAttribute('data-type') === 'roar-button'){
    var time = event.timeStamp;
    // console.log('the time is: ' + time);
    var activeUser = getActiveUser();
    // console.log('the activeuser is: ' + activeUser);
    var message = document.getElementById('new-roar-message');
    // console.log('the message is: ' + message);
    var roarMessage = message.value;
    // console.log('the roarMessage is: ' + roarMessage);
    var location = ['all-roars-container', 'activeuser-timeline-container']

    // createRoar(activeUser, roarMessage, time);
    createRoar(activeUser, roarMessage, getProfileImageUrl(activeUser), time)
    var all = roar(activeUser, getRealName(activeUser), getProfileImageUrl(activeUser), roarMessage, location[0]);
    var profile = roar(activeUser, getRealName(activeUser), getProfileImageUrl(activeUser), roarMessage, location[1]);

    updateRoarCount(activeUser);
    clearAllRoars();
    setupRoars(activeUser);
    clearActiveUserProfile();
    setupActiveUserTimeline(activeUser);

  }

});

/*-----------------------------------------------------------------*/
function setupUser(username) {

  activeUser = username;
  setupActiveUserPanel(username);
  setupActiveUserTimeline(username);
  setupRoars(username);
  setupFollowing(username);
  setupFollowers(username);

}

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
    console.log(theUsername);

    for(var i = 0; i < allRoars.length; i++) {
      if(allRoars[i].username === theUsername) {
        var profilePic = document.getElementById('random-roar-profile-pic');
        var pictureURL = getProfileImageUrl(allRoars[i].username); //allUsers[i].profileImage;
        console.log(pictureURL);
        profilePic.setAttribute('src', pictureURL);
      };
    };

    var realname = document.getElementById('random-roar-realname');
    var rName = document.createTextNode(getRealName(theUsername));
    realname.appendChild(rName);

    var username = document.getElementById('random-roar-username');
    var uName = document.createTextNode('@' + theUsername);
    username.appendChild(uName);
  };
};

function roar(theUserName, theRealName, profileImageURL, message, aLocation){

  console.log('the location is: ' + aLocation);
  var profileImage = document.createElement('img');
  profileImage.setAttribute('class', 'media-object profile-pic');
  profileImage.setAttribute('data-id', theUserName);
  profileImage.setAttribute('src', profileImageURL);
  profileImage.setAttribute('alt', '...');

  var imageDiv = document.createElement('div');
  imageDiv.setAttribute('data-id', theUserName);
  imageDiv.appendChild(profileImage);

  var mediaImage = document.createElement('div');
  mediaImage.setAttribute('class', 'media-left');

  if(aLocation === 'activeuser-timeline-container') {
      mediaImage.appendChild(imageDiv);
  } else if (aLocation === 'inactiveuser-timeline-container') {
      mediaImage.appendChild(imageDiv);
  } else {
      var aLink = document.createElement('a');
      aLink.setAttribute('href', '#');
      aLink.setAttribute('data-id', theUserName);
      aLink.appendChild(profileImage);
      mediaImage.appendChild(aLink);
  };

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
  var textRoarMessage = document.createTextNode(message);
  spanRoarMessage.appendChild(textRoarMessage);

  var mediaHeading2 = document.createElement('h4');
  mediaHeading2.setAttribute('class', 'media-heading');
  mediaHeading2.appendChild(spanRoarMessage);

  var mediaBody = document.createElement('div');
  mediaBody.setAttribute('class', 'media-body');
  mediaBody.setAttribute('data-id', theUserName);
  mediaBody.appendChild(mediaHeading1);
  mediaBody.appendChild(mediaHeading2);

  var divMedia = document.createElement('div');
  divMedia.setAttribute('class', 'media');
  divMedia.setAttribute('data-id', theUserName);
  divMedia.appendChild(mediaImage);
  divMedia.appendChild(mediaBody);

  var panelBody = document.createElement('div');
  panelBody.setAttribute('class', 'panel-body');
  panelBody.appendChild(divMedia);

  var panel = document.createElement('div');
  panel.setAttribute('class', 'panel panel-info');
  panel.appendChild(panelBody);

  // var parent = document.getElementById('all-roars');
  // parent.appendChild(panel);
  return panel;
};

function follower(username) {
  var profileImg = document.createElement('img');
  profileImg.setAttribute('class', 'profile-pic');
  profileImg.setAttribute('data-id', username);
  profileImg.setAttribute('data-value', 'follower');
  profileImg.setAttribute('src', getProfileImageUrl(username));
  profileImg.setAttribute('alt', '...');

  var imgDiv = document.createElement('div');
  imgDiv.setAttribute('class', 'media-left');
  imgDiv.setAttribute('data-id', username);
  imgDiv.setAttribute('data-value', 'follower');
  imgDiv.appendChild(profileImg);

  var bodyDiv = document.createElement('div');
  bodyDiv.setAttribute('class', 'media-body');
  bodyDiv.setAttribute('data-id', username);
  bodyDiv.setAttribute('data-value', 'follower');
  var textUsername = document.createTextNode(username);
  bodyDiv.appendChild(textUsername);

  var mediaDiv = document.createElement('div');
  mediaDiv.setAttribute('class', 'media');
  mediaDiv.setAttribute('data-id', username);
  mediaDiv.setAttribute('data-value', 'follower');
  mediaDiv.appendChild(imgDiv);
  mediaDiv.appendChild(bodyDiv);

  var aElement = document.createElement('a');
  aElement.setAttribute('href', '#');
  aElement.setAttribute('class', 'list-group-item');
  aElement.setAttribute('data-id', username);
  aElement.setAttribute('data-value', 'follower');
  aElement.appendChild(mediaDiv);

  return aElement;
}

function following(username) {
  var profileImg = document.createElement('img');
  profileImg.setAttribute('class', 'profile-pic');
  profileImg.setAttribute('data-id', username);
  profileImg.setAttribute('data-value', 'following');
  profileImg.setAttribute('src', getProfileImageUrl(username));
  profileImg.setAttribute('alt', '...');

  var imgDiv = document.createElement('div');
  imgDiv.setAttribute('class', 'media-left');
  imgDiv.setAttribute('data-id', username);
  imgDiv.setAttribute('data-value', 'following');
  imgDiv.appendChild(profileImg);

  var bodyDiv = document.createElement('div');
  bodyDiv.setAttribute('class', 'media-body');
  bodyDiv.setAttribute('data-id', username);
  bodyDiv.setAttribute('data-value', 'following');
  var textUsername = document.createTextNode(username);
  bodyDiv.appendChild(textUsername);

  var mediaDiv = document.createElement('div');
  mediaDiv.setAttribute('class', 'media');
  mediaDiv.setAttribute('data-id', username);
  mediaDiv.setAttribute('data-value', 'following');
  mediaDiv.appendChild(imgDiv);
  mediaDiv.appendChild(bodyDiv);

  var aElement = document.createElement('a');
  aElement.setAttribute('href', '#');
  aElement.setAttribute('class', 'list-group-item');
  aElement.setAttribute('data-id', username);
  aElement.setAttribute('data-value', 'following');
  aElement.appendChild(mediaDiv);

  return aElement;
}

function setupActiveUserPanel(username) {
  var headerImage = document.getElementById('activeuser-panel-header');
  var headerURL = getHeaderImageUrl(username);
  // console.log('user header image url is: ' + headerURL);
  headerImage.style.backgroundImage = headerURL;

  var profileImage = document.getElementById('activeuser-panel-profile-pic');
  // console.log('user profile image url is: ' + getProfileImageUrl(username));
  var profileURL = getProfileImageUrl(username);
  profileImage.setAttribute('src', profileURL);

  var realName = document.getElementById('activeuser-panel-realname');
  var userName = document.getElementById('activeuser-panel-username');
  var realText = document.createTextNode(getRealName(username));
  var userText = document.createTextNode('@' + username);
  realName.appendChild(realText);
  userName.appendChild(userText);
};

function setupActiveUserTimeline(username) {

  var theRealName = getRealName(username);
  // console.log('The real name is: ' + theRealName);
  var theUserName = getUserName(username);
  // console.log('The user name is: ' + theUserName);
  var profileImageURL = getProfileImageUrl(username);
  // console.log('The profile image URL is: ' + profileImageURL);
  var headerImageURL = getHeaderImageUrl(username);
  // console.log('The header image URL is: ' + headerImageURL);

  var parent = document.getElementById('activeuser-timeline');
  var div = document.createElement('div');
  div.setAttribute('id', 'activeuser-timeline-container');
  parent.appendChild(div);

  setupHeader(theUserName, theRealName, headerImageURL, profileImageURL, 'activeuser-timeline-container');

  var parent = document.getElementById('activeuser-timeline-container');
  // for(var i = 0; i < allRoars.length; i++) {
  for(var i = allRoars.length - 1; i >= 0; i--) {
    if(allRoars[i].username === username){
      parent.appendChild(roar(username, getRealName(username), getProfileImageUrl(username), allRoars[i].message,'activeuser-timeline-container'));
    };
  };

};

function setupInactiveUserTimeline(username) {

  var theRealName = getRealName(username);
  console.log('The real name is: ' + theRealName);
  var theUserName = getUserName(username);
  console.log('The user name is: ' + theUserName);
  var profileImageURL = getProfileImageUrl(username);
  console.log('The profile image URL is: ' + profileImageURL);
  var headerImageURL = getHeaderImageUrl(username);
  console.log('The header image URL is: ' + headerImageURL);

  var location = document.getElementById('inactiveuser-timeline');

  setupHeader(theUserName, theRealName, headerImageURL, profileImageURL, 'inactiveuser-timeline-container');

  var parent = document.getElementById('inactiveuser-timeline-container');
  for(var i = 0; i < allRoars.length; i++) {
    if(allRoars[i].username === username){
      parent.appendChild(roar(username, getRealName(username), getProfileImageUrl(username), allRoars[i].message, 'inactiveuser-timeline-container'));
    };
  };

};

function setupHeader(theUserName, theRealName, headerImageURL, profileImageURL, location) {

  var roarDiv = document.createElement('div');
  roarDiv.setAttribute('id', location);

  if(location === 'activeuser-timeline-container') {
    var parentDiv = document.getElementById('activeuser-timeline');
    parentDiv.appendChild(roarDiv);
  }
  if(location === 'inactiveuser-timeline-container') {
    var parentDiv = document.getElementById('inactiveuser-timeline');
    parentDiv.appendChild(roarDiv);
  }

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

  var following = isFollowing(activeUser, theUserName);
  var follower = isFollower(activeUser, theUserName);

  if(theUserName === activeUser){
    h4Header.appendChild(lgSpanRealName);
    h4Header.appendChild(lgSpanUserName);
  };

  if(theUserName != activeUser){
      // console.log('the active following user is: ' + activeFollowing[i]);
      // console.log('theUserName is: ' + theUserName);

      if(following == true) {
        console.log('setupHeader - inside the if(activeFollowing[i] === theUserName && following == true)');
        var btnFollowing = document.createElement('button');
        btnFollowing.setAttribute('type', 'button');
        btnFollowing.setAttribute('data-id', 'following-' + theUserName);
        btnFollowing.setAttribute('data-value', 'toggle-following');
        var btnText = document.createTextNode('Following');
        btnFollowing.appendChild(btnText);

        h4Header.appendChild(lgSpanRealName);
        h4Header.appendChild(lgSpanUserName);
        h4Header.appendChild(btnFollowing);
      };

      if(follower == true && following != true) {
        console.log('setupHeader - inside the if(activeFollowing[i] === theUserName && following == true)');
        var btnFollowing = document.createElement('button');
        btnFollowing.setAttribute('type', 'button');
        btnFollowing.setAttribute('data-id', 'follow-' + theUserName);
        btnFollowing.setAttribute('data-value', 'toggle-follower');
        var btnText = document.createTextNode('Follow');
        btnFollowing.appendChild(btnText);

        h4Header.appendChild(lgSpanRealName);
        h4Header.appendChild(lgSpanUserName);
        h4Header.appendChild(btnFollowing);
      };

      // if(following != true && follower != true  ) {
      //   console.log('setupHeader - inside the if(activeFollowing[i] != theUserName && following != true)');
      //   var btnFollow = document.createElement('button');
      //   btnFollow.setAttribute('type', 'button');
      //   btnFollow.setAttribute('data-id', 'follow-' + theUserName);
      //   var btnText = document.createTextNode('Follow');
      //   btnFollow.appendChild(btnText);
      //
      //   h4Header.appendChild(lgSpanRealName);
      //   h4Header.appendChild(lgSpanUserName);
      //   h4Header.appendChild(btnFollow);
      // };
      //
      // if(following != true && follower == true) {
      //   console.log('setupHeader - inside the if(activeFollowing[i] != theUserName && following != true)');
      //   var btnFollow = document.createElement('button');
      //   btnFollow.setAttribute('type', 'button');
      //   btnFollow.setAttribute('data-id', 'follow-' + theUserName);
      //   var btnText = document.createTextNode('Follow');
      //   btnFollow.appendChild(btnText);
      //
      //   h4Header.appendChild(lgSpanRealName);
      //   h4Header.appendChild(lgSpanUserName);
      //   h4Header.appendChild(btnFollow);
      // };

  };

  var liInfo = document.createElement('li');
  liInfo.setAttribute('class', 'list-group-item');
  liInfo.appendChild(h4Header);

  var ulHeader = document.createElement('ul');
  ulHeader.setAttribute('class', 'list-group');
  ulHeader.setAttribute('id', 'activeuser-header-ul')
  ulHeader.appendChild(listGroupHeader);
  ulHeader.appendChild(liInfo);

  var parent = document.getElementById(location);
  parent.appendChild(ulHeader);
};

function setupRoars(username) {

  var parent = document.getElementById('all-roars');
  var div = document.createElement('div');
  div.setAttribute('id', 'all-roars-container');

  var theFollowing = getFollowing(username);
  var tmpArray = [];
  for(var i = 0; i < theFollowing.length; i++) {
    for(var x = 0; x < allRoars.length; x++) {
      if(allRoars[x].username === theFollowing[i]){
        console.log('inside double for loop in setupRoars');
        tmpArray.push(allRoars[x]);
        console.log(tmpArray);
      }
    }
  }

  for(var i = 0; i < allRoars.length; i++){
    if(allRoars[i].username === username){
      tmpArray.push(allRoars[i]);
    }
  }

  for(var i = tmpArray.length - 1; i >= 0; i--) {
    var makeRoar = roar(tmpArray[i].username, getRealName(tmpArray[i].username), tmpArray[i].profileimage, tmpArray[i].message, 'all-roars-container');
    div.appendChild(makeRoar);
  }
  parent.appendChild(div);
};

function setupFollowing(username) {
  var num = document.getElementById('numFollowing');
  var text = document.createTextNode(numFollowing(username) + ' Following');
  console.log(text);
  num.appendChild(text);

  var parentNode = document.getElementById('activeuser-following');
  var child = document.getElementById('activeuser-following-container');
  parentNode.appendChild(child);

  var length = allUsers.length;
  if(length != 0){
    for(var i = 0; i < length; i++) {
      if(allUsers[i].username === username) {
        console.log(allUsers[i].following);
        for(var x = 0; x < allUsers[i].following.length; x++) {
          var parent = document.getElementById('activeuser-following-container');
          parent.setAttribute('data-id', 'activeuser-' + activeUser);
          var theFollowing = following(allUsers[i].following[x]);
          parent.appendChild(theFollowing);
        }
      }
    }
  }
}

function setupFollowers(username) {
  var num = document.getElementById('numFollowers');
  var text = document.createTextNode(numFollowers(username) + ' Followers');
  console.log(text);
  num.appendChild(text);

  var parentNode = document.getElementById('activeuser-followers');
  var child = document.getElementById('activeuser-followers-container');
  parentNode.appendChild(child);

  var length = allUsers.length;
  for(var i = 0; i < length; i++) {
    if(allUsers[i].username === username) {
      console.log(allUsers[i].followers);
      for(var x = 0; x < allUsers[i].followers.length; x++) {
        var parent = document.getElementById('activeuser-followers-container');
        var theFollowers = follower(allUsers[i].followers[x]);
        parent.appendChild(theFollowers);
      }
    }
  }
}

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

function getFollowing(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].following;
    };
  };
};

function numFollowing(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].following.length;
    };
  };
};

function removeFollowing(username, following) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username = username){
      var theFollowing = allUsers[i].following;
      for(var y = 0; y < theFollowing.length; y++){
        if(theFollowing[y] === following){
          theFollowing.pop(theFollowing[y]);
        };
      };
    };
  };
};

function addFollowing(username, following) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username = username){
      console.log(allUsers[i].following);
    };
  };
};

function getFollowers(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      return allUsers[i].followers;
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

function numFollowers(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      var length = allUsers[i].followers.length;
      return length;
    }
  }
}

function setActiveUser(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username){
      allUsers[i].isActiveUser = true;
      return allUsers[i];
    };
  };
};

function getActiveUser() {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].isActiveUser == true){
      return allUsers[i].username;
    };
  };
};

function isFollowing(username, theFollowing) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      var test = allUsers[i];
      for(var y = 0; y < test.following.length; y++) {
        if(test.following[y] === theFollowing) {
          return true;
        };
      };
    };
  };
};

function isFollower(username, theFollower) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      var test = allUsers[i];
      for(var y = 0; y < test.followers.length; y++) {
        if(test.followers[y] === theFollower) {
          return true;
        };
      };
    };
  };
};

function updateRoarCount(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username) {
      allUsers[i].roarCount++;
    };
  };
};

function clearTimeline() {
  var parent = document.getElementById('inactiveuser-timeline');
  var firstChild = parent.firstElementChild;
  if(firstChild != null){
    parent.removeChild(firstChild);
  };
};

function clearAllRoars() {
  var parent = document.getElementById('all-roars');
  var firstChild = parent.firstElementChild;
  if(firstChild != null){
    parent.removeChild(firstChild);
  };
};

function clearActiveUserProfile() {
  var parent = document.getElementById('activeuser-timeline');
  var firstChild = parent.firstElementChild;
  if(firstChild != null){
    parent.removeChild(firstChild);
  };
};

function clearFollowers() {
  var parent = document.getElementById('activeuser-followers');
  var firstChild = parent.firstElementChild;
  if(firstChild != null){
    parent.removeChild(firstChild);
  };
};

function clearFollowing() {
  var parent = document.getElementById('activeuser-following');
  var firstChild = parent.firstElementChild;
  if(firstChild != null){
    parent.removeChild(firstChild);
  };
};
