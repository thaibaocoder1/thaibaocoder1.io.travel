// Navbar menu
window.addEventListener("load", function () {
  const navbarList = document.querySelector(".navbar-list");
  const navbarMenu = document.querySelector(".navbar-menu");
  const overlay = document.querySelector(".overlay");
  navbarMenu.addEventListener("click", displayMenuMobile);
  function displayMenuMobile(e) {
    navbarList.classList.toggle("active");
    overlay.style.display = "block";
  }
  document.body.addEventListener("click", function (e) {
    if (e.target.matches(".overlay")) {
      navbarList.classList.remove("active");
      overlay.style.display = "none";
    }
  });
});
// Display submenu
window.addEventListener("load", function () {
  const elPage = document.getElementById("page");
  const subnavMenu = document.querySelector(".subnav-mobile");
  elPage.addEventListener("click", function () {
    subnavMenu.classList.toggle("is-actived");
  });
});
// Slider
