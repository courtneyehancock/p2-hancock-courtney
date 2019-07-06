/*var mlink = document.getElementById("morelink"),
  mdiv = document.getElementById("morediv");

mlink.addEventListener("click", function(event) {
  event.preventDefault();
  mdiv.style.display = (mdiv.style.display === "none") ? "block" : "none";
}, false);

mdiv.style.display = "none";*/

var openButton = document.getElementById('menu-open');
var closeButton = document.getElementById('menu-close');
var mobileMenu = document.getElementById('mobile-nav');

//we need our mobile menu to be hidden

//showMenu function
function showMenu() {
  closeButton.classList.remove('hide');
  mobileMenu.classList.remove('hide');
  openButton.classList.add('hide');
  closeButton.classList.add('show');
  mobileMenu.classList.add('show');
  openButton.classList.remove('show');
};

//hideMenu function
function hideMenu(){
  closeButton.classList.add('hide');
  mobileMenu.classList.add('hide');
  openButton.classList.remove('hide');
  closeButton.classList.remove('show');
  mobileMenu.classList.remove('show');
  openButton.classList.add('show');

};

//add click event listener to our menuOpen button
openButton.addEventListener('click', showMenu);

//add click event listener to our menuClose button
closeButton.addEventListener('click', hideMenu);
