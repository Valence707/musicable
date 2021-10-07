

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
	document.body.style['background-color'] = 'black';
	document.getElementById('colorThemeIndicatorButton').textContent = 'Dark';
	document.getElementById('backgroundDecorationContainer').style.filter = 'invert(0)';
	const titleButtonText = document.getElementById('titleButtonContainer').querySelectorAll('h1,p');
	for (let i = 0; i < titleButtonText.length; i++) {
	  titleButtonText[i].style.color = 'white';
	}
  
	const titleButtonImages = document.querySelector('#titleButtonContainer').querySelectorAll('img');
	for (let i = 0; i < titleButtonImages.length; i++) {
	  titleButtonImages[i].style.filter = 'invert(0)';
	}
  
	document.querySelector('.toolBar').style['background-color'] = 'black';
	document.querySelector('.toolBar').style['border-color'] = 'yellow';
  
	const toolBarText = document.querySelector('.toolBar').querySelectorAll('div');
	for (let i = 0; i < toolBarText.length; i++) {
	  toolBarText[i].style.color = 'yellow';
	}
  
	const overlayText = document.querySelector('#overlayContainer').querySelectorAll('p');
	for (let i = 0; i < overlayText.length; i++) {
	  overlayText[i].style.color = 'white';
	}
  
	const overlayBodies = document.querySelector('#overlayContainer').querySelectorAll('div');
	for (let i = 0; i < overlayBodies.length; i++) {
	  overlayBodies[i].style['background-color'] = 'black';
	  overlayBodies[i].style['border-color'] = 'yellow';
	}
  
	const closeButtons = document.querySelectorAll('h2,h3');
	for (let i = 0; i < closeButtons.length; i++) {
	  closeButtons[i].style.color = 'yellow';
	}
  }
  
  function lightModeColorTheme() {
  
	// All light mode theme methods here.
	saveColorTheme('light');
	document.body.style['background-color'] = 'white';
	document.querySelector('#colorThemeIndicatorButton').textContent = 'Light';
	document.querySelector('#backgroundDecorationContainer').style.filter = 'invert(1)';
	const titleButtonText = document.querySelector('#titleButtonContainer').querySelectorAll('h1,p');
	for (let i = 0; i < titleButtonText.length; i++) {
	  titleButtonText[i].style.color = 'black';
	}
  
	const titleButtonImages = document.querySelector('#titleButtonContainer').querySelectorAll('img');
	for (let i = 0; i < titleButtonImages.length; i++) {
	  titleButtonImages.item(i).style.filter = 'invert(1)';
	}
  
	document.querySelector('.toolBar').style['background-color'] = 'white';
	document.querySelector('.toolBar').style['border-color'] = 'blue';
  
	const toolBarText = document.querySelector('#toolBar').querySelectorAll('div');
	for (let i = 0; i < toolBarText.length; i++) {
	  toolBarText[i].style.color = 'black';
	}
  
	const overlayText = document.querySelector('#overlayContainer').querySelectorAll('p');
	for (let i = 0; i < overlayText.length; i++) {
	  overlayText[i].style.color = 'black';
	}
  
	const overlayBodies = document.querySelector('#overlayContainer').querySelectorAll('div');
	for (let i = 0; i < overlayBodies.length; i++) {
	  overlayBodies[i].style['background-color'] = 'white';
	  overlayBodies[i].style['border-color'] = 'blue';
	}
  
	const closeButtons = document.querySelectorAll('h2,h3');
	for (let i = 0; i < closeButtons.length; i++) {
	  closeButtons[i].style.color = 'black';
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