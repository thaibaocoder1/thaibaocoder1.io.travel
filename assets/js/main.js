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
window.addEventListener("load", function () {
  const sliderPrev = document.querySelector(".slider-prev");
  const sliderNext = document.querySelector(".slider-next");
  const sliderListDot = document.querySelectorAll(".slider-dot-item");
  const sliderMain = document.querySelector(".slider-main");
  const sliderListItem = document.querySelectorAll(".slider-item");
  const sliderImgWidth = sliderListItem[0].getBoundingClientRect().width;
  const sliderLength = sliderListItem.length;
  let positionX = 0;
  let index = 0;
  sliderNext.addEventListener("click", function () {
    handleChangeImage(1);
  });
  sliderPrev.addEventListener("click", function () {
    handleChangeImage(-1);
  });
  [...sliderListDot].forEach((item) =>
    item.addEventListener("click", handleChangeDots)
  );
  function handleChangeImage(dir) {
    if (dir === 1) {
      if (index >= sliderLength - 1) {
        index = sliderLength - 1;
        return;
      }
      positionX = positionX - sliderImgWidth;
      sliderMain.style.transform = `translateX(${positionX}px)`;
      ++index;
    } else if (dir === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + sliderImgWidth;
      sliderMain.style.transform = `translateX(${positionX}px)`;
      --index;
    }
    [...sliderListDot].forEach((item) => item.classList.remove("dot-active"));
    [...sliderListDot][index].classList.add("dot-active");
  }
  function handleChangeDots(e) {
    [...sliderListDot].forEach((item) => item.classList.remove("dot-active"));
    e.target.classList.add("dot-active");
    let indexDot = +e.target.dataset.index;
    index = indexDot;
    positionX = sliderImgWidth * index * -1;
    sliderMain.style.transform = `translateX(${positionX}px)`;
  }
});
// Slider main
window.addEventListener("load", function () {
  const list = document.querySelector(".list");
  const images = Array.from(list.children);
  const nextBtn = document.querySelector(".btn-right");
  const prevBtn = document.querySelector(".btn-left");
  const imgWidth = images[0].getBoundingClientRect().width;

  function setImgPosition(img, index) {
    img.style.left = imgWidth * index + "px";
  }
  const moveToImg = function (list, currentImg, targetImg) {
    list.style.transform = `translateX(-${targetImg.style.left})`;
    currentImg.classList.remove("current-img");
    targetImg.classList.add("current-img");
  };
  const hideShowArrows = function (images, prevBtn, nextBtn, targetIndex) {
    if (targetIndex === 0) {
      prevBtn.classList.add("hidden");
      nextBtn.classList.remove("hidden");
    } else if (targetIndex === images.length - 1) {
      prevBtn.classList.remove("hidden");
      nextBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
    }
  };
  images.forEach(setImgPosition);
  nextBtn.addEventListener("click", function () {
    const currentImg = list.querySelector(".current-img");
    const nextImg = currentImg.nextElementSibling;
    const nextIndex = images.findIndex((x) => x === nextImg);
    moveToImg(list, currentImg, nextImg);
    hideShowArrows(images, prevBtn, nextBtn, nextIndex);
  });
  prevBtn.addEventListener("click", function () {
    const currentImg = list.querySelector(".current-img");
    const prevImg = currentImg.previousElementSibling;
    const prevIndex = images.findIndex((img) => img === prevImg);
    moveToImg(list, currentImg, prevImg);
    hideShowArrows(images, prevBtn, nextBtn, prevIndex);
  });
});
// Direction to page
const gridImages = document.querySelectorAll(".grid-item");
[...gridImages].forEach((img) => {
  img.addEventListener("click", () => {
    window.location.href = "../../tour.html";
  });
});
// Login transition with tag span
