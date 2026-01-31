// sticky navbar script
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// side menu script
let menuBtn = document.getElementById("menuBtn");
let sideMenu = document.getElementById("sideMenu");
menuBtn.addEventListener("click", function () {
  sideMenu.classList.toggle("active");
});

// close side menu on link click
let sideMenuLinks = document.querySelectorAll("#sideMenu a");
sideMenuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    sideMenu.classList.remove("active");
  });
});

// close side menu on outside click
window.addEventListener("click", function (e) {
  if (e.target == sideMenu) {
    sideMenu.classList.remove("active");
  }
});
window.addEventListener("scroll", function () {
  sideMenu.classList.remove("active");
});
document.addEventListener("click", function (e) {
  if (!sideMenu.contains(e.target) && e.target != menuBtn) {
    sideMenu.classList.remove("active");
  }
});
