function overlayBackgroundOn() {
  document.getElementById('overlayContainer').style.display = 'block';
}

function overlayOff() {
  document.querySelector('#overlayContainer').style.display = 'none';
}

function infoOverlayOn() {
  document.getElementById('infoOverlay').style.display = 'flex';
  document.getElementById("settingsOverlay").style['flex-flow'] = 'column';
  document.getElementById('settingsOverlay').style.display = 'none';
  overlayBackgroundOn();
  }

function settingsOverlayOn() {
  document.getElementById("settingsOverlay").style.display = "flex";
  document.getElementById("settingsOverlay").style['flex-flow'] = 'column';
  document.getElementById('infoOverlay').style.display = 'none';
  overlayBackgroundOn();
  }

let documentColorTheme = 'dark';

function colorThemeChange() {
  if (documentColorTheme != 'dark') {

    // All dark mode theme methods here.
    documentColorTheme = 'dark';
    document.body.style['background-color'] = 'black';
    document.getElementById('colorThemeIndicatorButton').textContent = 'Dark';
    document.getElementById('colorThemeIndicatorButton').style.color = 'white';
    document.getElementById('colorThemeIndicatorButton').style['background-color'] = 'black';
    document.getElementById('backgroundDecorationContainer').style.filter = 'invert(0)';
    const titleButtonText = document.getElementById('titleButtonContainer').querySelectorAll('h1,p');
    for (let i = 0; i < titleButtonText.length; i++) {
      titleButtonText.item(i).style.color = 'white';

    const titleButtonImages = document.getElementById('titleButtonContainer').querySelectorAll('img');
    for (let i = 0; i < titleButtonImages.length; i++) {
      titleButtonImages.item(i).style.filter = 'invert(0)';
    }
  }
}

  else if (documentColorTheme = 'dark') {

    // All light mode theme methods here.
    documentColorTheme = 'light';
    document.body.style['background-color'] = 'white';
    document.getElementById('colorThemeIndicatorButton').textContent = 'Light';
    document.getElementById('colorThemeIndicatorButton').style.color = 'black';
    document.getElementById('colorThemeIndicatorButton').style['background-color'] = 'white';
    document.getElementById('backgroundDecorationContainer').style.filter = 'invert(1)';
    const titleButtonText = document.getElementById('titleButtonContainer').querySelectorAll('h1,p');
    for (let i = 0; i < titleButtonText.length; i++) {
      titleButtonText.item(i).style.color = 'black';
    }

    const titleButtonImages = document.getElementById('titleButtonContainer').querySelectorAll('img');
    for (let i = 0; i < titleButtonImages.length; i++) {
      titleButtonImages.item(i).style.filter = 'invert(1)';
    }
  }
}