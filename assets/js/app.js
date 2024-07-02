// navigation header
let bar = document.querySelector(".navigationbar");
window.addEventListener("scroll", () => {
  this.scrollY === 0
    ? bar.classList.remove("scrolled")
    : bar.classList.add("scrolled");
});

//parteners slider
let swiper = new Swiper(".partenersSwiper", {
  spaceBetween: 50,
  grabCursor: true,
  loop: true,
  autoplayTimeout: 5000,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    992: {
      slidesPerView: 5
    },
    768: {
      slidesPerView: 4
    },
    350: {
      slidesPerView: 2
    }
  }
});

// nav-links-highlight
let navLinks = document.querySelectorAll("header .nav-link");
let sections = document.querySelectorAll(".sec");
let current;
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 110) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});

// animate counting
let numbers = document.querySelectorAll(".num");
let started = false;
function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 3000 / goal);
}
window.onscroll = function () {
  if (this.scrollY >= document.querySelector(".parteners").offsetTop - 200) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};

//nav toggler
let toggler = document.querySelector("#toggle");
let overlay = document.querySelector(".overlay");
toggler.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
  if (document.querySelector(".nav-links").classList.contains("active")) {
    toggler.querySelector("i").classList =
      "fa-sharp fa-solid fa-bars-staggered";
    overlay.classList.add("active");
  } else {
    toggler.querySelector("i").classList = "fa-sharp fa-solid fa-bars";
    overlay.classList.remove("active");
  }
});
overlay.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.remove("active");
  overlay.classList.remove("active");
  toggler.querySelector("i").classList = "fa-sharp fa-solid fa-bars";
});
let links = document.querySelectorAll(".nav-link");
links.forEach((l) => {
  l.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
    overlay.classList.remove("active");
    toggler.querySelector("i").classList = "fa-sharp fa-solid fa-bars";
  });
});

//testmonials slider
var swiperX = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    350: {
      slidesPerView: 1
    }
  }
});

$(document).ready(function () {
  //aos Delay
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });
  // aos
  AOS.init({
    offset: 20,
    delay: 50,
    duration: 700,
    easing: "linear",
    once: true
  });
});

var swiper2 = new Swiper(".thumbs", {
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  direction: "vertical",
  watchSlidesProgress: true
});

var swiper1 = new Swiper(".system-gallary", {
  loop: true,
  spaceBetween: 10,
  speed: 1000,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  thumbs: {
    swiper: swiper2
  }
});

// parallax
var parallaxImage = document.getElementsByClassName("parallax");
new simpleParallax(parallaxImage, {
  delay: 1,
  transition: "cubic-bezier(0,0,0,1)"
});
// tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
