function overlayBackgroundOn() {
  document.getElementById('overlayContainer').style.display = 'block';
}

function overlayOff() {
  document.getElementById('overlayContainer').style.display = 'none';
}

function infoOverlayOn() {
  document.getElementById('siteInfoOverlay').style.display = 'block';
  document.getElementById('siteSettingsOverlay').style.display = 'none';
  overlayBackgroundOn();
  }

function settingsOverlayOn() {
  document.getElementById("siteSettingsOverlay").style.display = "block";
  document.getElementById('siteInfoOverlay').style.display = 'none';
  overlayBackgroundOn();
  }

function colorThemeChangeLight() {
  document.getElementById
}