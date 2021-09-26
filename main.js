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
    document.getElementById('colorThemeIndicatorButton').style.color = 'yellow';
    document.getElementById('colorThemeIndicatorButton').style['background-color'] = 'black';
    document.getElementById('backgroundDecorationContainer').style.filter = 'invert(0)';
    const titleButtonText = document.getElementById('titleButtonContainer').querySelectorAll('h1,p');
    for (let i = 0; i < titleButtonText.length; i++) {
      titleButtonText[i].style.color = 'white';

    const titleButtonImages = document.getElementById('titleButtonContainer').querySelectorAll('img');
    for (let i = 0; i < titleButtonImages.length; i++) {
      titleButtonImages[i].style.filter = 'invert(0)';
    }

    document.getElementById('toolBar').style['background-color'] = 'black';
    document.getElementById('toolBar').style['border-color'] = 'yellow';

    const toolBarText = document.getElementById('toolBar').querySelectorAll('div');
    for (let i = 0; i < toolBarText.length; i++) {
      toolBarText[i].style.color = 'yellow';
    }

    const overlayText = document.getElementById('overlayContainer').querySelectorAll('p');
    for (let i = 0; i < overlayText.length; i++) {
      overlayText[i].style.color = 'white';
    }

    const overlayBodies = document.getElementById('overlayContainer').querySelectorAll('div');
    for (let i = 0; i < overlayBodies.length; i++) {
      overlayBodies[i].style['background-color'] = 'black';
      overlayBodies[i].style['border-color'] = 'yellow';
    }

    const closeButtons = document.querySelectorAll('h2,h3');
    for (let i = 0; i < closeButtons.length; i++) {
      closeButtons[i].style.color = 'yellow';
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
      titleButtonText[i].style.color = 'black';
    }

    const titleButtonImages = document.getElementById('titleButtonContainer').querySelectorAll('img');
    for (let i = 0; i < titleButtonImages.length; i++) {
      titleButtonImages.item(i).style.filter = 'invert(1)';
    }

    document.getElementById('toolBar').style['background-color'] = 'white';
    document.getElementById('toolBar').style['border-color'] = 'blue';

    const toolBarText = document.getElementById('toolBar').querySelectorAll('div');
    for (let i = 0; i < toolBarText.length; i++) {
      toolBarText[i].style.color = 'black';
    }

    const overlayText = document.getElementById('overlayContainer').querySelectorAll('p');
    for (let i = 0; i < overlayText.length; i++) {
      overlayText[i].style.color = 'black';
    }

    const overlayBodies = document.getElementById('overlayContainer').querySelectorAll('div');
    for (let i = 0; i < overlayBodies.length; i++) {
      overlayBodies[i].style['background-color'] = 'white';
      overlayBodies[i].style['border-color'] = 'blue';
    }

    const closeButtons = document.querySelectorAll('h2,h3');
    for (let i = 0; i < closeButtons.length; i++) {
      closeButtons[i].style.color = 'black';
    }
  }
}