function overlayBackgroundOn() {
  document.querySelector('#overlayContainer').style.display = 'block';
}

function overlayOff() {
  document.querySelector('#overlayContainer').style.display = 'none';
}

function infoOverlayOn() {
  document.querySelector('#infoOverlay').style.display = 'flex';
  document.querySelector("#settingsOverlay").style['flex-flow'] = 'column';
  document.querySelector('#settingsOverlay').style.display = 'none';
  overlayBackgroundOn();
  }

function settingsOverlayOn() {
  document.querySelector("#settingsOverlay").style.display = "flex";
  document.querySelector("#settingsOverlay").style['flex-flow'] = 'column';
  document.querySelector('#infoOverlay').style.display = 'none';
  overlayBackgroundOn();
  }

const saveColorTheme = (color) => {
  localStorage.setItem('documentColorTheme', color)
}

function darkModeColorTheme() {
  
  // All dark mode theme methods here.
  saveColorTheme('dark');
  document.querySelector('#musicableTitle').style.color = 'yellow';
  document.body.style['background-color'] = 'black';
  document.querySelector('#colorThemeIndicatorButton').textContent = 'Dark';
  document.querySelector('#backgroundDecorationContainer').style.filter = 'invert(0)';
  document.querySelector("#musicableTitle").style.filter = 'invert(0)';
  
  const titleButtonText = document.querySelector('#titleButtonContainer').querySelectorAll('h1,p');
  for (let i = 0; i < titleButtonText.length; i++) {
    titleButtonText[i].style.color = 'white';
  }

  const titleButtonImages = document.querySelector('#titleButtonContainer').querySelectorAll('img');
  for (let i = 0; i < titleButtonImages.length; i++) {
    titleButtonImages[i].style.filter = 'invert(0)';
  }

  document.querySelector('#toolBar').style['background-color'] = 'black';
  document.querySelector('#toolBar').style['border-color'] = 'yellow';
  const titleBarImages = document.querySelector("#titleBar").querySelectorAll("img");
  for (let i of titleBarImages) {
    i.style.filter = "invert(0)";
  }
  const toolBarUtilityButtons = document.querySelector("#toolBar").querySelectorAll(".toolBarUtilityButton");
  for (i of toolBarUtilityButtons) {
    i.style.filter = "invert(0)";
  }
}

function lightModeColorTheme() {

  // All light mode theme methods here.
  saveColorTheme('light');
  document.querySelector('#musicableTitle').style.color = 'blue';
  document.body.style['background-color'] = 'white';
  document.querySelector('#colorThemeIndicatorButton').textContent = 'Light';
  document.querySelector('#backgroundDecorationContainer').style.filter = 'invert(1)';
  const titleButtonText = document.querySelector('#titleButtonContainer').querySelectorAll('h1,p');
  for (let i = 0; i < titleButtonText.length; i++) {
    titleButtonText[i].style.color = 'black';
  }

  const titleButtonImages = document.querySelector('#titleButtonContainer').querySelectorAll('img');
  for (let i = 0; i < titleButtonImages.length; i++) {
    titleButtonImages[i].style.filter = 'invert(1)';
  }
  
  const titleBarImages = document.querySelector("#titleBar").querySelectorAll('img');
  for (let i of titleBarImages) {
    i.style.filter = "invert(1)";
  }

  document.querySelector("#musicableTitle").style.color = 'blue';

  document.querySelector('#toolBar').style['background-color'] = 'white';
  document.querySelector('#toolBar').style['border-color'] = 'blue';
  const toolBarUtilityButtons = document.querySelector("#toolBar").querySelectorAll(".toolBarUtilityButton");
  for (i of toolBarUtilityButtons) {
    i.style.filter = "invert(1)";
  }
}

document.addEventListener('DOMContentLoaded', function initializeColorTheme() {
  var colorTheme = localStorage.getItem('documentColorTheme', localStorage.getItem('documentColorTheme'));
  if (colorTheme == null || colorTheme == undefined) {
    darkModeColorTheme();
  } else if (colorTheme == 'light') {
    lightModeColorTheme();
  } else if (colorTheme == 'dark') {
    darkModeColorTheme();
  }
});

function colorThemeChange() {
  var colorTheme = localStorage.getItem('documentColorTheme');
  if (colorTheme == 'light') {
    darkModeColorTheme();
  } else if (colorTheme == 'dark') {
    lightModeColorTheme();
  }
}

var comments = "";

function submitUserComment(inputType) {
  if (inputType.key == 'Enter' || inputType == 'buttonClick') {
    var userComment = document.querySelector("#userComment").value+'<br>';
    if (userComment != '<br>' && userComment.trim() != '<br>') {
      comments += "<span id='userCommentNameDisplay'>USER: </span>"+userComment;
      document.querySelector("#userComment").value = '';
      document.querySelector("#commentDisplay").innerHTML = comments;
      inputType.preventDefault();
    } else {
      document.querySelector("#userComment").value = '';
      inputType.preventDefault();
    }
  }
}