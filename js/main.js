//read more show message & hide message on story page
var button = document.getElementById("show-message");
var hiddenMessage = document.getElementById("hidden-message");

function showMessage() {
  hiddenMessage.classList.remove("hide");
}

function hideMessage() {
  hiddenMessage.classList.add("hide");
}

button.addEventListener("mouseenter", showMessage);
button.addEventListener("mouseleave", hideMessage);

//Popup Ad on homepage
var ad = document.getElementById("ad");

function adMessage() {
  window.alert("Get 20% off a custom order when you refer a friend!");
}

ad.addEventListener("mouseenter", adMessage);
