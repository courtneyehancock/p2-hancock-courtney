var button = document.getElementById('show-message');
var hiddenMessage = document.getElementById('hidden-message');

function showMessage() {
  hiddenMessage.classList.remove('hide');
}

function hideMessage() {
  hiddenMessage.classList.add('hide');
}

button.onmouseenter = showMessage;
button.onmouseleave = hideMessage;
