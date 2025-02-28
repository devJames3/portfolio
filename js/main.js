//Navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Service section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
  serviceModals[modalClick].classList.add("active");
};

learnmoreBtns.forEach((learnmoreBtn, i) => {
  learnmoreBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active");
};

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});

// Download CV
const downloadButton = document.getElementById("download-cv");

downloadButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "../Updated_Latest_Resume_February_2025.pdf";
  link.download = "James_CV.pdf";
  link.click();
});

//Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrenIcon());
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrenIcon = () =>
  themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");
    // console.log(current);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.add("active");
    } else {
      if(document.querySelector(".nav-items a[href*=" + id + "]"))
        {
          document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    }
  });
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const CloseBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

CloseBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
  // reset: true,
  distance: "40px",
  duration: 2500,
  delay: 100,
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal(".home .info h2, .section-title-01, .section-title-02 ", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".home .info h3, .home .info p, .about-info .btn", {
  delay: 600,
  origin: "right",
});
ScrollReveal().reveal(".home .info .btn", {
  delay: 700,
  origin: "bottom",
});
ScrollReveal().reveal(".media-icons i, .contact-left li ", {
  delay: 500,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".about-img", {
  delay: 500,
  origin: "bottom",
});
ScrollReveal().reveal(".about .description, .contact-right", {
  delay: 600,
  origin: "right",
});
ScrollReveal().reveal(".about .professional-list li", {
  delay: 500,
  origin: "right",
  interval: 200,
});
ScrollReveal().reveal(
  ".skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2, ",
  {
    delay: 700,
    origin: "left",
  }
);
ScrollReveal().reveal(
  ".experience-card, .service-card, .education, .portfolio .img-card, .portfolio-load-more-container, .experience-load-more-container",
  {
    delay: 800,
    origin: "bottom",
    interval: 200,
  }
);
ScrollReveal().reveal("footer .group", {
  delay: 500,
  origin: "top",
  interval: 200,
});
// ScrollReveal().reveal('.img-card', { reset: true });



// load more element
const experienceLoadMoreBtn = document.getElementById("experienceLoadMoreBtn");
const experienceMoreContent = document.getElementById("experienceMoreContent");
const experienceLoadMoreText = document.querySelector(".experience-load-more-text");

const portfolioLoadMoreBtn = document.getElementById("portfolioLoadMoreBtn");
const portfolioMoreContent = document.getElementById("portfolioMoreContent");
const portfolioLoadMoreText = document.querySelector(".portfolio-load-more-text");


const showContent = (contentContainer, loadMoreText) => {
  contentContainer.classList.toggle("show");
  loadMoreText.textContent = contentContainer.classList.contains("show") ? "Show Less" : "Load More";
}

experienceLoadMoreBtn.addEventListener("click", () => showContent(experienceMoreContent, experienceLoadMoreText));
portfolioLoadMoreBtn.addEventListener("click", () => showContent(portfolioMoreContent, portfolioLoadMoreText));

document.addEventListener("DOMContentLoaded", function () {
    const imgCards = document.querySelectorAll(".img-card");

    portfolioLoadMoreBtn.addEventListener("click", function () {
        imgCards.forEach(card => {
            card.style.opacity = "1";
        });
    });
});
