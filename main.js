const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

const options = {};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add("scrol");
    } else {
      nav.classList.remove("scrol");
    }
  });
}, options);

observer.observe(header);
