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
    headerImage: 'images/yokohama_fuji.jpg',
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
    headerImage: 'images/godzilla header.png',
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
    headerImage: 'images/kongheader.jpg',
    isActiveUser: false,
    password: 'kingkong'
  },
  {
    username: 'mothra',
    realname: 'モスラ',
    followers: ['HeroOfTime'],
    following: [],
    roarCount: 1,
    profileImage: 'images/mothra profile.jpg',
    headerImage: 'images/mothra header.jpg',
    isActiveUser: false,
    password: 'mothra'
  },
  {
    username: 'gamera',
    realname: 'ガメラ',
    followers: ['HeroOfTime'],
    following: [],
    roarCount: 1,
    profileImage: 'images/gamera profile.jpg',
    headerImage: 'images/gamera header.jpg',
    isActiveUser: false,
    password: 'gamera'
  },
  {
    username: 'HeroOfTime',
    realname: 'link',
    followers: [],
    following: ['gamera', 'kaijuking', 'godzilla', 'mothra', 'kingkong'],
    roarCount: 1,
    profileImage: 'images/linkprofile.jpg',
    headerImage: 'images/linkheader.jpg',
    isActiveUser: false,
    password: 'link'
  },
  {
    username: 'anguirus',
    realname: 'アンギラス',
    followers: [],
    following: [],
    roarCount: 0,
    profileImage: 'images/anguirusprofile.jpg',
    headerImage: 'images/anguirusheader.jpg',
    isActiveUser: false,
    password: 'anguirus'
  },
  {
    username: 'kingghidorah',
    realname: 'キングギドラ',
    followers: [],
    following: [],
    roarCount: 0,
    profileImage: 'images/kingghidorahprofile.jpg',
    headerImage: 'images/kingghidorahheader.jpg',
    isActiveUser: false,
    password: 'kingghidorah'
  },
  {
    username: 'ultraseven',
    realname: 'ウルトラセブン',
    followers: [],
    following: [],
    roarCount: 0,
    profileImage: 'images/ultrasevenprofile.jpg',
    headerImage: 'images/ultrasevenheader.jpg',
    isActiveUser: false,
    password: 'ultraseven'
  },
  {
    username: 'gigan',
    realname: 'ギガン',
    followers: [],
    following: [],
    roarCount: 0,
    profileImage: 'images/giganprofile.jpg',
    headerImage: 'images/giganheader.jpg',
    isActiveUser: false,
    password: 'gigan'
  },
  {
    username: 'mechagodzilla',
    realname: 'メカゴジラ',
    followers: [],
    following: [],
    roarCount: 0,
    profileImage: 'images/mechagodzillaprofile.jpg',
    headerImage: 'images/mechagodzillaheader.jpg',
    isActiveUser: false,
    password: 'mechagodzilla'
  },
  {
    username: 'gappa',
    realname: 'ガッパ',
    followers: [],
    following: [],
    roarCount: 0,
    profileImage: 'images/gappaprofile.jpg',
    headerImage: 'images/gappaheader.jpg',
    isActiveUser: false,
    password: 'gappa'
  },
  {
    username: 'rodan',
    realname: 'ラドン',
    followers: [],
    following: [],
    roarCount: 0,
    profileImage: 'images/rodanprofile.jpg',
    headerImage: 'images/rodanheader.jpg',
    isActiveUser: false,
    password: 'rodan'
  },
  {
    username: 'spacegodzilla',
    realname: 'スペースゴジラ',
    followers: [],
    following: [],
    roarCount: 0,
    profileImage: 'images/spacegodzillaprofile.jpg',
    headerImage: 'images/spacegodzillaheader.jpg',
    isActiveUser: false,
    password: 'spacegodzilla'
  },
  {
    username: 'destroya',
    realname: 'デストロイア',
    followers: [],
    following: [],
    roarCount: 0,
    profileImage: 'images/destroyaprofile.jpg',
    headerImage: 'images/destroyaheader.jpg',
    isActiveUser: false,
    password: 'destroya'
  },
  {
    username: 'daimajin',
    realname: '大魔神',
    followers: [],
    following: [],
    roarCount: 0,
    profileImage: 'images/daimajinprofile.jpg',
    headerImage: 'images/daimajinheader.jpg',
    isActiveUser: false,
    password: 'daimajin'
  }
];

var userSettings = [
  {
    username: 'kaijuking',
    realname: 'Michael Field',
    language: 'lang-en',
    password: 'kaijuking',
    email: 'kaijuking@email.com'
  },
  {
    username: 'godzilla',
    realname: 'ゴジラ',
    language: 'lang-en',
    password: 'godzilla',
    email: 'godzilla@email.com'
  },
  {
    username: 'kingkong',
    realname: 'King Kong',
    language: 'lang-en',
    password: 'kingkong',
    email: 'kingkong@email.com'
  },
  {
    username: 'mothra',
    realname: 'モスラ',
    language: 'lang-en',
    password: 'mothra',
    email: 'mothra@email.com'
  },
  {
    username: 'gamera',
    realname: 'ガメラ',
    language: 'lang-en',
    password: 'gamera',
    email: 'gamera@email.com'
  },
  {
    username: 'HeroOfTime',
    realname: 'link',
    language: 'lang-en',
    password: 'link',
    email: 'herooftime@email.com'
  },
  {
      username: 'anguirus',
      realname: 'アンギラス',
      language: 'lang-en',
      password: 'anguirus',
      email: 'anguirus@email.com'
  },
  {
      username: 'kingghidorah',
      realname: 'キングギドラ',
      language: 'lang-en',
      password: 'kingghidorah',
      email: 'kingghidorah@email.com'
  },
  {
      username: 'ultraseven',
      realname: 'ウルトラセブン',
      language: 'lang-en',
      password: 'ultraseven',
      email: 'ultraseven@email.com'
  },
  {
    username: 'gigan',
    realname: 'ギガン',
    language: 'lang-en',
    password: 'gigan',
    email: 'gigan@email.com'
  },
  {
    username: 'mechagodzilla',
    realname: 'メカゴジラ',
    language: 'lang-en',
    password: 'mechagodzilla',
    email: 'mechagodzilla@email.com'
  },
  {
    username: 'gappa',
    realname: 'ガッパ',
    language: 'lang-en',
    password: 'gappa',
    email: 'gappa@email.com'
  },
  {
    username: 'rodan',
    realname: 'ラドン',
    language: 'lang-en',
    password: 'rodan',
    email: 'rodan@email.com'
  },
  {
    username: 'spacegodzilla',
    realname: 'スペースゴジラ',
    language: 'lang-en',
    password: 'spacegodzilla',
    email: 'spacegodzilla@email.com'
  },
  {
    username: 'destroya',
    realname: 'デストロイア',
    language: 'lang-en',
    password: 'destroya',
    email: 'destroya@email.com'
  },
  {
    username: 'daimajin',
    realname: '大魔神',
    language: 'lang-en',
    password: 'destroya',
    email: 'daimajin@email.com'
  }
];

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

        var logoutButton = document.getElementById('logout');
        logoutButton.setAttribute('class', 'btn btn-link pull-right show');

        activeUser = setActiveUser(usernameValue);
        setupUser(usernameValue);

      } else {
        var warning = document.getElementById('login-warning-alert');
        warning.setAttribute('class', 'alert alert-warning alert-dismissible show');
      };
    };
  };
});

function createRoar(username, roarMessage, profileimage, timestamp) {
  var newRoar = new Roar(username, roarMessage, profileimage, timestamp);
  allRoars.push(newRoar);
};

document.addEventListener('click', function(event) {

  event.preventDefault();
  var theTarget = event.target;
  console.log(theTarget);

  var myLinks = document.getElementsByTagName('a');
  var timeline = document.getElementById('all-roars');
  var activeuserProfile = document.getElementById('activeuser-timeline');
  var inactiveuserProfile = document.getElementById('inactiveuser-timeline');

  if(theTarget.getAttribute('data-type') === 'roar-button'){
    var time = event.timeStamp;
    var theActiveUser = getActiveUser();
    var message = document.getElementById('new-roar-message');
    var roarMessage = message.value;
    var location = ['all-roars-container', 'activeuser-timeline-container']

    createRoar(theActiveUser, roarMessage, getProfileImageUrl(theActiveUser), time)
    var all = roar(theActiveUser, getRealName(theActiveUser), getProfileImageUrl(theActiveUser), roarMessage, location[0]);
    var profile = roar(theActiveUser, getRealName(theActiveUser), getProfileImageUrl(theActiveUser), roarMessage, location[1]);

    updateRoarCount(theActiveUser);
    clearAllRoars();
    setupRoars(theActiveUser);
    clearActiveUserProfile();
    setupActiveUserProfile(theActiveUser);

    var roarForm = document.getElementById('form-createRoar');
    roarForm.reset();

  };

  if(theTarget.getAttribute('data-value') === 'following'){
    clearInactiveUserProfile();
    var theUser = theTarget.getAttribute('data-id');
    var friend = document.getElementById('tab-inactiveuser-timeline');
    friend.setAttribute('class', 'show');
    $('#tab-inactiveuser-timeline a[href="#inactiveuser-timeline"]').tab('show');
    setupInactiveUserProfile(theUser);
  };

  if(theTarget.getAttribute('data-value') === 'follower'){
    clearInactiveUserProfile();
    var theUser = theTarget.getAttribute('data-id');
    var friend = document.getElementById('tab-inactiveuser-timeline');
    friend.setAttribute('class', 'show');
    $('#tab-inactiveuser-timeline a[href="#inactiveuser-timeline"]').tab('show');
    setupInactiveUserProfile(theUser);
  };

  if(theTarget.getAttribute('data-value') === 'generic-user'){
    clearInactiveUserProfile();
    var theUser = theTarget.getAttribute('data-id');
    var friend = document.getElementById('tab-inactiveuser-timeline');
    friend.setAttribute('class', 'show');
    $('#tab-inactiveuser-timeline a[href="#inactiveuser-timeline"]').tab('show');
    setupInactiveUserProfile(theUser);
  };

  if(theTarget.getAttribute('data-value') === 'activeuser'){
    $('#tab-activeuser-timeline a[href="#activeuser-timeline"]').tab('show');
  };

  if(theTarget.getAttribute('data-value') === 'toggle-follow'){
    var buttonText = theTarget.textContent;
    if(buttonText === 'Following') {
      var dataID = theTarget.getAttribute('data-id');
      removeFollowing(getActiveUser(), dataID);
      clearFollowing();
      setupFollowing(getActiveUser());
      clearFollowers();
      setupFollowers(getActiveUser());
      clearInactiveUserProfile();
      setupInactiveUserProfile(dataID);
      clearAllRoars();
      setupRoars(getActiveUser());
      theTarget.textContent = 'Follow';
    };
  };

  if(theTarget.getAttribute('data-value') === 'toggle-following'){
    var buttonText = theTarget.textContent;
    if(buttonText === 'Follow'){
      var dataID = theTarget.getAttribute('data-id');
      addFollowing(getActiveUser(), dataID);
      clearFollowing();
      setupFollowing(getActiveUser());
      clearFollowers();
      setupFollowers(getActiveUser());
      clearInactiveUserProfile();
      setupInactiveUserProfile(dataID);
      clearAllRoars();
      setupRoars(getActiveUser());
      theTarget.textContent = 'Following';
    };
  };

  if(theTarget.getAttribute('data-id') === 'favorite-icon') {
    var dataValue = theTarget.getAttribute('data-value');
    var stringArray = dataValue.split('-',2);
    var state = stringArray[0];
    var timestamp = stringArray[1];

    if(state === 'false') {
      theTarget.setAttribute('class', 'fa fa-heart');
      theTarget.setAttribute('data-value', 'true-' + timestamp);
      updateFavoredCount(state, timestamp);
      theTarget.textContent = ' ' + getFavoredCount(timestamp);
    }

    if(state === 'true') {
      theTarget.setAttribute('class', 'fa fa-heart-o');
      theTarget.setAttribute('data-value', 'false-' + timestamp);
      updateFavoredCount(state, timestamp);
      theTarget.textContent = ' ' + getFavoredCount(timestamp);
    }
  }

  if(theTarget.getAttribute('data-id') === 're-roar-icon') {
    var dataValue = theTarget.getAttribute('data-value');
    var stringArray = dataValue.split('-',2);
    var state = stringArray[0];
    var timestamp = stringArray[1];

    if(state === 'false') {
      theTarget.style.color = 'blue';
      theTarget.setAttribute('data-value', 'true-' + timestamp);
    }

    if(state === 'true') {
      theTarget.style.color = 'black';
      theTarget.setAttribute('data-value', 'false-' + timestamp);
    }
  }

  if(theTarget.getAttribute('data-id') === 'user-account-information'){
    var accountInformation = document.getElementById('account-information-container');
    accountInformation.setAttribute('class', 'show');

    var userSettings = document.getElementById('user-settings-container');
    userSettings.setAttribute('class', 'hidden');
  };

  if(theTarget.getAttribute('data-id') === 'button-account-information-save'){
    //Code here for saving the user information
    var usernameValue = document.getElementById('account-username').value;
    var realnameValue = document.getElementById('account-realname').value;
    var emailValue = document.getElementById('account-email').value;

    if(usernameValue != null) {
      var theUsername = getActiveUser();
      if(usernameValue != theUsername) {
        setUsername(theUsername, document.getElementById('account-username').value);
      }
    }

    if(realnameValue != null) {
      var theUsername = getActiveUser();
      var theRealname = getRealname(theUsername);
      if(realnameValue != theRealname) {
        setRealname(theUsername, realnameValue);
      }
    }

    if(emailValue != null) {
      var theUsername = getActiveUser();
      var theEmail = getEmail(theUsername);
      if(emailValue != theEmail) {
        setEmail(theUsername, emailValue);
      }
    }

    activeUser = getActiveUser();
    clearAllRoars();
    setupRoars(activeUser);
    clearActiveUserProfile();
    setupActiveUserProfile(activeUser);
    clearActiveUserPanel();
    setupActiveUserPanel(activeUser);

    var accountInformation = document.getElementById('account-information-container');
    accountInformation.setAttribute('class', 'hidden');

    var userSettings = document.getElementById('user-settings-container');
    userSettings.setAttribute('class', 'show');

    var accountForm = document.getElementById('form-account-information');
    accountForm.reset();
  };

  if(theTarget.getAttribute('data-id') === 'button-account-information-cancel'){
    var accountInformation = document.getElementById('account-information-container');
    accountInformation.setAttribute('class', 'hidden');

    var userSettings = document.getElementById('user-settings-container');
    userSettings.setAttribute('class', 'show');

    var accountForm = document.getElementById('form-account-information');
    accountForm.reset();
  }

  if(theTarget.getAttribute('data-id') === 'user-password-information'){
    var passwordInformation = document.getElementById('password-information-container');
    passwordInformation.setAttribute('class', 'show');

    var userSettings = document.getElementById('user-settings-container');
    userSettings.setAttribute('class', 'hidden');
  };

  if(theTarget.getAttribute('data-id') === 'button-password-information-save'){
    var passwordInformation = document.getElementById('password-information-container');
    passwordInformation.setAttribute('class', 'hidden');

    var userSettings = document.getElementById('user-settings-container');
    userSettings.setAttribute('class', 'show');

    //Code here for saving the user's password information

    var passwordForm = document.getElementById('form-password-information');
    passwordForm.reset();
  };

  if(theTarget.getAttribute('data-id') === 'button-password-information-cancel'){
    var passwordInformation = document.getElementById('password-information-container');
    passwordInformation.setAttribute('class', 'hidden');

    var userSettings = document.getElementById('user-settings-container');
    userSettings.setAttribute('class', 'show');

    var passwordForm = document.getElementById('form-password-information');
    passwordForm.reset();
  };

  if(theTarget.getAttribute('data-id') === 'user-account-information') {
    var settingsUsername = document.getElementById('account-username');
    settingsUsername.value = getUsername(getActiveUser());

    var settingsRealname = document.getElementById('account-realname');
    settingsRealname.value = getRealName(getActiveUser());

    var settingsEmail = document.getElementById('account-email');
    settingsEmail.value = getEmail(getActiveUser());
  }

  if(theTarget.getAttribute('data-id') === 'button-account-information-cancel') {
    var accountInformation = document.getElementById('form-account-information');
    accountInformation.reset();
  }

  if(theTarget.getAttribute('data-id') === 'button-password-information-cancel') {
    var passwordInformation = document.getElementById('form-password-information');
    passwordInformation.reset();
  }

  if(theTarget.getAttribute('id') === 'logout'){
    logout();
  };

});

/*-----------------------------------------------------------------*/
function setupUser(username) {

  activeUser = username;
  setupActiveUserPanel(username);
  setupActiveUserProfile(username);
  setupRoars(username);
  setupFollowing(username);
  setupFollowers(username);
  displayAllUsers();

}

function randomRoar() {
  var length = allRoars.length;

  if(length != null) {
    var random = Math.floor((Math.random() * (length-1)) + 1);
    var theMessage = allRoars[random].message;
    var roar = document.getElementById('random-roar-message');
    var roarMessage = document.createTextNode(theMessage);
    roar.appendChild(roarMessage);
    var theUsername = allRoars[random].username;

    for(var i = 0; i < allRoars.length; i++) {
      if(allRoars[i].username === theUsername) {
        var profilePic = document.getElementById('random-roar-profile-pic');
        var pictureURL = getProfileImageUrl(allRoars[i].username); //allUsers[i].profileImage;
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

function roar(theUserName, theRealName, profileImageURL, message, timestamp, favoredcount, aLocation){

  if(theUserName != activeUser){
    var profileImage = document.createElement('img');
    profileImage.setAttribute('class', 'media-object profile-pic');
    profileImage.setAttribute('data-id', theUserName);
    profileImage.setAttribute('data-value', 'following');
    profileImage.setAttribute('src', profileImageURL);
    profileImage.setAttribute('alt', '...');
  };

  if(theUserName === activeUser){
    var profileImage = document.createElement('img');
    profileImage.setAttribute('class', 'media-object profile-pic');
    profileImage.setAttribute('data-id', theUserName);
    profileImage.setAttribute('data-value', 'activeuser');
    profileImage.setAttribute('src', profileImageURL);
    profileImage.setAttribute('alt', '...');
  };

  var imageDiv = document.createElement('div');
  imageDiv.setAttribute('data-id', theUserName);
  imageDiv.appendChild(profileImage);

  var mediaImage = document.createElement('div');
  mediaImage.setAttribute('class', 'media-left');

  if(aLocation === 'activeuser-timeline-container') {
      mediaImage.appendChild(imageDiv);
  };

  if(aLocation === 'inactiveuser-timeline-container') {
      mediaImage.appendChild(imageDiv);
  };

  if(aLocation === 'all-roars-container') {
    var aLink = document.createElement('a');
    aLink.setAttribute('href', '#');
    aLink.setAttribute('data-id', theUserName);
    aLink.setAttribute('data-value', 'following');
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

  var reRoarLink = document.createElement('a');
  reRoarLink.setAttribute('href', '#');
  reRoarLink.setAttribute('data-id', 're-roar-link');
  // reRoarLink.setAttribute('data-value', 're-roar-link-false');
  reRoarLink.setAttribute('data-value', 'false-' + timestamp);

  var reRoarIcon = document.createElement('i');
  reRoarIcon.setAttribute('class', 'fa fa-retweet');
  reRoarIcon.setAttribute('data-id', 're-roar-icon');
  // reRoarIcon.setAttribute('data-value', 're-roar-icon-false');
  reRoarIcon.setAttribute('data-value', 'false-' + timestamp);
  reRoarLink.appendChild(reRoarIcon);
  spanReRoar.appendChild(reRoarLink);

  var spanFavorite = document.createElement('span');
  spanFavorite.setAttribute('class', 'favorite');
  spanFavorite.setAttribute('data-id', 'favorite');

  var favoriteLink = document.createElement('a');
  favoriteLink.setAttribute('href', '#');
  favoriteLink.setAttribute('data-id', 'favorite-link');
  // favoriteLink.setAttribute('data-value', 'favorite-link-false');
  favoriteLink.setAttribute('data-value', 'false-' + timestamp);

  var favoriteIcon = document.createElement('i');
  favoriteIcon.setAttribute('class', 'fa fa-heart-o');
  favoriteIcon.setAttribute('data-id', 'favorite-icon');
  // favoriteIcon.setAttribute('data-value', 'favorite-icon-false');
  favoriteIcon.setAttribute('data-value', 'false-' + timestamp);
  favoriteIcon.textContent = ' ' + favoredcount;
  favoriteLink.appendChild(favoriteIcon);
  spanFavorite.appendChild(favoriteLink);

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

function genericUser(username) {
  var profileImg = document.createElement('img');
  profileImg.setAttribute('class', 'profile-pic');
  profileImg.setAttribute('data-id', username);
  profileImg.setAttribute('data-value', 'generic-user');
  profileImg.setAttribute('src', getProfileImageUrl(username));
  profileImg.setAttribute('alt', '...');

  var imgDiv = document.createElement('div');
  imgDiv.setAttribute('class', 'media-left');
  imgDiv.setAttribute('data-id', username);
  imgDiv.setAttribute('data-value', 'generic-user');
  imgDiv.appendChild(profileImg);

  var bodyDiv = document.createElement('div');
  bodyDiv.setAttribute('class', 'media-body');
  bodyDiv.setAttribute('data-id', username);
  bodyDiv.setAttribute('data-value', 'generic-user');

  var textUserInfo = document.createTextNode(getRealName(username) + ' @' + username + ' -- ' + 'Following: ' + numFollowing(username) + ', Followers: ' + numFollowers(username));
  bodyDiv.appendChild(textUserInfo);

  var mediaDiv = document.createElement('div');
  mediaDiv.setAttribute('class', 'media');
  mediaDiv.setAttribute('data-id', username);
  mediaDiv.setAttribute('data-value', 'generic-user');
  mediaDiv.appendChild(imgDiv);
  mediaDiv.appendChild(bodyDiv);

  var aElement = document.createElement('a');
  aElement.setAttribute('href', '#');
  aElement.setAttribute('class', 'list-group-item');
  aElement.setAttribute('data-id', username);
  aElement.setAttribute('data-value', 'generic-user');
  aElement.appendChild(mediaDiv);

  return aElement;
}

function setupActiveUserPanel(username) {
  var headerImage = document.getElementById('activeuser-panel-header');
  var headerURL = 'url(\'' + getHeaderImageUrl(username) + '\')';
  headerImage.style.backgroundImage = headerURL;

  var profileImage = document.getElementById('activeuser-panel-profile-pic');
  var profileURL = getProfileImageUrl(username);
  profileImage.setAttribute('src', profileURL);

  var realName = document.getElementById('activeuser-panel-realname');
  var userName = document.getElementById('activeuser-panel-username');
  var realText = document.createTextNode(getRealName(username));
  var userText = document.createTextNode('@' + username);
  realName.appendChild(realText);
  userName.appendChild(userText);
};

function setupActiveUserProfile(username) {

  var theRealName = getRealName(username);
  var theUserName = getUserName(username);
  var profileImageURL = getProfileImageUrl(username);
  var headerImageURL = 'url(\'' + getHeaderImageUrl(username) + '\')';
  var parent = document.getElementById('activeuser-timeline');
  var div = document.createElement('div');
  div.setAttribute('id', 'activeuser-timeline-container');
  parent.appendChild(div);

  setupHeader(theUserName, theRealName, headerImageURL, profileImageURL, 'activeuser-timeline-container');

  var parent = document.getElementById('activeuser-timeline-container');
  for(var i = allRoars.length - 1; i >= 0; i--) {
    if(allRoars[i].username === username){
      parent.appendChild(roar(username, getRealName(username), getProfileImageUrl(username), allRoars[i].message, allRoars[i].timestamp, allRoars[i].favoredcount, 'activeuser-timeline-container'));
    };
  };
};

function setupInactiveUserProfile(username) {

  var theRealName = getRealName(username);
  var theUserName = getUserName(username);
  var profileImageURL = getProfileImageUrl(username);
  var headerImageURL = 'url(\'' + getHeaderImageUrl(username) + '\')';

  var parent = document.getElementById('inactiveuser-timeline');
  var div = document.createElement('div');
  div.setAttribute('id', 'inactiveuser-timeline-container');
  parent.appendChild(div);

  setupHeader(theUserName, theRealName, headerImageURL, profileImageURL, 'inactiveuser-timeline-container');

  var parent = document.getElementById('inactiveuser-timeline-container');
  for(var i = allRoars.length - 1; i >= 0; i--) {
    if(allRoars[i].username === username){
      parent.appendChild(roar(username, getRealName(username), getProfileImageUrl(username), allRoars[i].message, 'inactiveuser-timeline-container'));
    };
  };

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

  var following = isFollowing(activeUser, theUserName);
  var follower = isFollower(activeUser, theUserName);

  if(theUserName === activeUser){
    var liInfo = document.createElement('li');
    liInfo.setAttribute('class', 'list-group-item');
    liInfo.appendChild(h4Header);
  }

  if(following === true && theUserName != activeUser){
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('data-id', theUserName);
    button.setAttribute('data-value', 'toggle-follow');
    var text = document.createTextNode('Following');
    button.appendChild(text);

    var liInfo = document.createElement('li');
    liInfo.setAttribute('class', 'list-group-item');
    liInfo.appendChild(h4Header);
    liInfo.appendChild(button);
  }

  if(following != true && theUserName != activeUser){
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('data-id', theUserName);
    button.setAttribute('data-value', 'toggle-following');
    var text = document.createTextNode('Follow');
    button.appendChild(text);

    var liInfo = document.createElement('li');
    liInfo.setAttribute('class', 'list-group-item');
    liInfo.appendChild(h4Header);
    liInfo.appendChild(button);
  }

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
        tmpArray.push(allRoars[x]);
      }
    }
  }

  for(var i = 0; i < allRoars.length; i++){
    if(allRoars[i].username === username){
      tmpArray.push(allRoars[i]);
    }
  }

  for(var i = tmpArray.length - 1; i >= 0; i--) {
    // var makeRoar = roar(tmpArray[i].username, getRealName(tmpArray[i].username), tmpArray[i].profileimage, tmpArray[i].message, 'all-roars-container');
    var makeRoar = roar(tmpArray[i].username, getRealName(tmpArray[i].username), tmpArray[i].profileimage, tmpArray[i].message, tmpArray[i].timestamp, tmpArray[i].favoredcount, 'all-roars-container');
    div.appendChild(makeRoar);
  }
  parent.appendChild(div);
};

function setupFollowing(username) {
  var num = document.getElementById('numFollowing');
  var text = document.createTextNode(numFollowing(username) + ' Following');
  num.appendChild(text);

  var parentNode = document.getElementById('activeuser-following');
  var child = document.getElementById('activeuser-following-container');
  if(child === null){
    var theChild = document.createElement('div');
    theChild.setAttribute('id', 'activeuser-following-container')
    parentNode.appendChild(theChild);
  } else {
    parentNode.appendChild(child);
  }

  var length = allUsers.length;
  if(length != 0){
    for(var i = 0; i < length; i++) {
      if(allUsers[i].username === username) {
        for(var x = 0; x < allUsers[i].following.length; x++) {
          var parent = document.getElementById('activeuser-following-container');
          parent.setAttribute('data-id', 'activeuser-' + activeUser);
          var theFollowing = following(allUsers[i].following[x]);
          parent.appendChild(theFollowing);
        };
      };
    };
  };
};

function setupFollowers(username) {
  var num = document.getElementById('numFollowers');
  var text = document.createTextNode(numFollowers(username) + ' Followers');
  num.appendChild(text);

  var parentNode = document.getElementById('activeuser-followers');
  var child = document.getElementById('activeuser-followers-container');
  if(child === null){
    var theChild = document.createElement('div');
    theChild.setAttribute('id', 'activeuser-followers-container');
    parentNode.appendChild(theChild);
  } else {
    parentNode.appendChild(child);
  };

  var length = allUsers.length;
  for(var i = 0; i < length; i++) {
    if(allUsers[i].username === username) {
      for(var x = 0; x < allUsers[i].followers.length; x++) {
        var parent = document.getElementById('activeuser-followers-container');
        var theFollowers = follower(allUsers[i].followers[x]);
        parent.appendChild(theFollowers);
      };
    };
  };
};

function displayAllUsers() {
  var parentNode = document.getElementById('all-users');
  var child = document.getElementById('all-users-container');
  if(child === null) {
    var theChild = document.createElement('div');
    theChild.setAttribute('id', 'all-users-container');
    parentNode.appendChild(theChild);
  } else {
    parentNode.appendChild(child);
  }

  for(var i = 0; i < allUsers.length; i++) {
    var theActiveUser = getActiveUser();
    if(allUsers[i].username != theActiveUser) {
      var parent = document.getElementById('all-users-container');
      var aUser = genericUser(allUsers[i].username);
      parent.appendChild(aUser);
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

function getUsername(username) {
  for(var i = 0; i < userSettings.length; i++) {
    if(userSettings[i].username === username) {
      return userSettings[i].username;
    }
  }
};

function setUsername(username, newUsername) {
  for(var i = 0; i < userSettings.length; i++) {
    if(userSettings[i].username === username) {
      userSettings[i].username = newUsername;
    }
  }

  for(var i = 0; i < allUsers.length; i++) {
    for(var x = 0; x < allUsers[i].followers.length; x++) {
      if(allUsers[i].followers[x] === username){
        allUsers[i].followers[x] = newUsername;
      };
    };
  };

  for(var i = 0; i < allUsers.length; i++) {
    for(var x = 0; x < allUsers[i].following.length; x++) {
      if(allUsers[i].following[x] === username){
        allUsers[i].following[x] = newUsername;
      };
    };
  };

  for(var x = 0; x < allUsers.length; x++) {
    if(allUsers[x].username === username) {
      allUsers[x].username = newUsername;
    }
  }

  for(var y = 0; y < allRoars.length; y++) {
    if(allRoars[y].username === username) {
      allRoars[y].username = newUsername;
    }
  }
};

function getRealname(username) {
  for(var i = 0; i < userSettings.length; i++) {
    if(userSettings[i].username === username) {
      return userSettings[i].realname;
    }
  }
};

function setRealname(username, newRealName) {
  for(var i = 0; i < userSettings.length; i++) {
    if(userSettings[i].username === username) {
      userSettings[i].realname = newRealName;
    }
  }

  for(var x = 0; x < allUsers.length; x++) {
    if(allUsers[x].username === username) {
      allUsers[x].realname = newRealName;
    }
  }
};

function getPassword(username) {
  for(var i = 0; i < userSettings.length; i++) {
    if(userSettings[i].username === username) {
      return userSettings[i].password;
    }
  }
};

function setPassword(username, currentPassword, newPassword) {
  for(var i = 0; i < userSettings.length; i++) {
    if(usersSettings[i].username === username) {
      if(userSettings[i].password === currentPassword) {
        userSettings[i].password = newPassword;
      }
    }
  }
};

function getEmail(username) {
  for(var i = 0; i < userSettings.length; i++) {
    if(userSettings[i].username === username) {
      return userSettings[i].email;
    }
  }
};

function setEmail(username, email) {
  for(var i = 0; i < userSettings.length; i++) {
    if(userSettings[i].username === username) {
      userSettings[i].email = email;
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

function removeFollowing(username, following){
  for(var i = 0; i < allUsers.length; i++){
    if(allUsers[i].username === username){
      var tmpArray = allUsers[i].following;
      for(var x = 0; x < tmpArray.length; x++){
        if(tmpArray[x] === following){
          tmpArray.splice(x,1);
        };
      };
    };
  };

  for(var i = 0; i < allUsers.length; i++){
    if(allUsers[i].username === following){
      var tmpArray = allUsers[i].followers;
      for(var x = 0; x < tmpArray.length; x++){
        if(tmpArray[x] === username){
          tmpArray.splice(x,1);
        };
      };
    };
  };
};

function addFollowing(username, following) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username = username){
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
    };
  };
};

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

function updateFavoredCount(state, timestamp) {
  console.log('state = ' + state);
  console.log('timestamp = ' + timestamp);

  for(var i = 0; i < allRoars.length; i++) {
    if(allRoars[i].timestamp == timestamp) {
      if(state === 'false') {
        console.log('false');
        allRoars[i].favoredcount++;
      }
      if(state === 'true') {
        console.log('true');
        allRoars[i].favoredcount--;
      }
    }
  }
}

function updateSharedCount(timestamp) {
  for(var i = 0; i < allRoars.length; i++) {
    if(allRoars[i].timestamp === timestamp) {
      allRoars[i].favoredcount++;
    }
  }
}

function getFavoredCount(timestamp) {
  console.log('inside getFavoredCount: ' + timestamp);
  for(var i = 0; i < allRoars.length; i++) {
    if(allRoars[i].timestamp.toString() === timestamp) {
      return allRoars[i].favoredcount;
    }
  }
}

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

  var followers = document.getElementById('numFollowers');
  followers.textContent = '';
};

function clearFollowing() {
  var parent = document.getElementById('activeuser-following');
  var firstChild = parent.firstElementChild;
  if(firstChild != null){
    parent.removeChild(firstChild);
  };
  var following = document.getElementById('numFollowing');
  following.textContent = '';
};

function clearAllRoars() {
  var parent = document.getElementById('all-roars');
  var firstChild = parent.firstElementChild;
  if(firstChild != null){
    parent.removeChild(firstChild);
  };
};

function clearActiveUserPanel() {
  var realname = document.getElementById('activeuser-panel-realname').textContent = '';
  var username = document.getElementById('activeuser-panel-username').textContent = '';
}

function clearInactiveUserProfile() {
  var parent = document.getElementById('inactiveuser-timeline');
  var firstChild = parent.firstElementChild;
  if(firstChild != null){
    parent.removeChild(firstChild);
  };
};

function addFollowing(username, following){
  for(var i = 0; i < allUsers.length; i++){
    if(allUsers[i].username === username){
      var tmpArray = allUsers[i].following;
      allUsers[i].following.push(following);
    };
  };

  for(var x = 0; x < allUsers.length; x++){
    if(allUsers[x].username === following){
      allUsers[x].followers.push(username);
    };
  };
};

function resetActiveUser(username) {
  for(var i = 0; i < allUsers.length; i++) {
    if(allUsers[i].username === username){
      allUsers[i].isActiveUser = false;
      return allUsers[i];
    };
  };
};

function logout(){
  var allRoars = document.getElementById('all-roars');
  var roarChild = document.getElementById('all-roars-container');
  if(roarChild != null) {
    allRoars.removeChild(roarChild);
  };

  var activeuserTimeline = document.getElementById('activeuser-timeline');
  var activeuserChild = document.getElementById('activeuser-timeline-container');
  if(activeuserChild != null) {
    activeuserTimeline.removeChild(activeuserChild);
  }

  var inactiveuserTimeline = document.getElementById('inactiveuser-timeline');
  var inactiveuserChild = document.getElementById('inactiveuser-timeline-container');
  if(inactiveuserChild != null) {
    inactiveuserTimeline.removeChild(inactiveuserChild);
  };

  var followers = document.getElementById('activeuser-followers');
  var followerChild = document.getElementById('activeuser-followers-container');
  if(followerChild != null)  {
    followers.removeChild(followerChild);
  };


  var following = document.getElementById('activeuser-following');
  var followingChild = document.getElementById('activeuser-following-container');
  if(followingChild != null) {
    following.removeChild(followingChild);
  };

  var all = document.getElementById('all-users');
  var allChild = document.getElementById('all-users-container');
  if(allChild != null) {
    all.removeChild(allChild);
  };

  var settings = document.getElementById('settings');
  var settingsLink = document.getElementById('settings-link');
  if(settingsLink != null) {
    settings.removeChild(settingsLink);
  };

  var username = document.getElementById('activeuser-panel-username');
  username.textContent = '';

  var realname = document.getElementById('activeuser-panel-realname');
  realname.textContent = '';

  var numFollowers = document.getElementById('numFollowers');
  numFollowers.textContent = '';

  var numFollowing = document.getElementById('numFollowing');
  numFollowing.textContent = '';

  var loginForm = document.getElementById('form-login');
  loginForm.reset();

  var roarForm = document.getElementById('form-createRoar');
  roarForm.reset();

  var accountInformation = document.getElementById('form-account-information');
  accountInformation.reset();

  var passwordInformation = document.getElementById('form-password-information');
  passwordInformation.reset();

  var warning = document.getElementById('login-warning-alert');
  warning.setAttribute('class', 'alert alert-warning alert-dismissible hidden');

  var loginPage = document.getElementById('roar-login-page');
  loginPage.setAttribute('class', 'container-fluid show');

  var theTimeline = document.getElementById('roar-timeline');
  theTimeline.setAttribute('class', 'container-fluid hidden');

  var logout = document.getElementById('logout');
  logout.setAttribute('class', 'hidden');

  var allTab = document.getElementById('tab-all-roars');
  allTab.setAttribute('class', 'show active');

  var allTab = document.getElementById('all-roars');
  allTab.setAttribute('class', 'tab-pane active');

  var tabActiveuser = document.getElementById('tab-activeuser-timeline');
  tabActiveuser.setAttribute('class', 'show');

  var activeuserTab = document.getElementById('activeuser-timeline');
  activeuserTab.setAttribute('class', 'tab-pane');

  var tabInactiveuser = document.getElementById('tab-inactiveuser-timeline');
  tabInactiveuser.setAttribute('class', 'hidden');

  var inactiveuserTab = document.getElementById('inactiveuser-timeline');
  inactiveuserTab.setAttribute('class', 'tab-pane');

  var tabAllUsers = document.getElementById('tab-user-all');
  tabAllUsers.setAttribute('class', 'show');

  var allUsersTab = document.getElementById('all-users-tab');
  allUsersTab.setAttribute('class', 'tab-pane');

  var tabSettings = document.getElementById('tab-user-settings');
  tabSettings.setAttribute('class', 'show');

  var settingsTab = document.getElementById('user-settings');
  settingsTab.setAttribute('class', 'tab-pane');

  activeUser = '';
  resetActiveUser(getActiveUser());
};
