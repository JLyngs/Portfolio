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