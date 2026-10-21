const portfolioSwiper = new Swiper(".portfolioSwiper", {
  slidesPerView: "auto",
  spaceBetween: 35,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});

// Portfolio row animation
const portfolioRow = document.querySelector(".portfolio-row");

if (portfolioRow) {
  const originalItems = [...portfolioRow.children];

  // Duplicate images to create a continuous loop
  originalItems.forEach((item) => {
    portfolioRow.appendChild(item.cloneNode(true));
  });

  let itemWidth = 235; // Image width + gap
  let position = 0;

  setInterval(() => {
    position += itemWidth;

    portfolioRow.style.transition = "transform 0.6s ease-in-out";
    portfolioRow.style.transform = `translateX(-${position}px)`;

    // Move the first image to the end after the animation finishes
    if (position >= originalItems.length * itemWidth) {
      setTimeout(() => {
        portfolioRow.style.transition = "none";

        const firstItem = portfolioRow.firstElementChild;
        portfolioRow.appendChild(firstItem);

        position -= itemWidth;
        portfolioRow.style.transform = `translateX(-${position}px)`;
      }, 650);
    }
  }, 2000);
}

// service row animation

const servicesTrack = document.querySelector(".services-track");

if (servicesTrack) {
  const serviceCards = [...servicesTrack.children];

  serviceCards.forEach((card) => {
    const clone = card.cloneNode(true);

    clone.setAttribute("aria-hidden", "true");
    servicesTrack.appendChild(clone);
  });
}

// start join section
const providersSwiper = new Swiper(".providersSwiper", {
  slidesPerView: 3,

  grid: {
    rows: 2,
    fill: "row",
  },

  spaceBetween: 36,
  slidesPerGroup: 3,
  speed: 700,

  pagination: {
    el: ".providersSwiper .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerGroup: 1,
      spaceBetween: 15,
    },

    576: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerGroup: 2,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerGroup: 3,
      spaceBetween: 36,
    },
  },
});
