//
// Show Menu Bar

const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
});

// Remove Menu Bar

const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
  nav.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*  Change Active Link Color  */

const linkColor = document.querySelectorAll(".nav-link");
function colorLink() {
  if (colorLink) {
    linkColor.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  }
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

// Swiper For Home Section
var swiper = new Swiper(".home-container", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Scroll To Top Button

const up = document.querySelector(".up");
window.addEventListener("scroll", () => {
  up.classList.toggle("show", window.scrollY >= 560);
  up.onclick = () => {
    window.scrollTo({ behavior: "smooth", top: "0" });
  };
});
