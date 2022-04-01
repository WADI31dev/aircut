const headLine = document.querySelector("h1")
const offerDetails = document.querySelector(".offer-details")
const lastSection = document.querySelector(".last-section")
const toFade = [offerDetails, lastSection];

const isInViewport = (element) => {
  const position = element.getBoundingClientRect();
  return (position.top < window.innerHeight && position.bottom >= 0);
};

window.addEventListener("scroll", (event) => {
  toFade.forEach((element) => {
    if (isInViewport(element)) {
      element.style.setProperty('animation', 'fadeInUp');
      element.style.setProperty('animation-duration', '1s');
    }
  });
});
