var button = document.getElementById('show-message');
var hiddenMessage = document.getElementById('hidden-message');

function showMessage() {
  hiddenMessage.classList.remove('hide');
}

function hideMessage() {
  hiddenMessage.classList.add('hide');
}

button.addEventListener('mouseenter', showMessage);
button.addEventListener('mouseleave', hideMessage);

//Popup Ad
var ad = document.getElementById('ad');

function adMessage() {
  alert('Get 20% off when you refer a friend');
}

ad.addEventListener('mouseenter', adMessage);
//API
