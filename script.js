var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarheader").style.top = "0";
  } else {
    document.getElementById("navbarheader").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');

  burgerMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  navLinks.addEventListener('click', function() {
    navLinks.classList.remove('active');
  });
});