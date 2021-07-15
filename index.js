const translate = document.querySelectorAll(".translate");
const bigTitle = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const imgContainer = document.querySelector(".img-container");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let headerHeight = header.offsetHeight;
let sectionHeight = section.offsetHeight;

console.log(headerHeight);
console.log(sectionHeight);

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();
  console.log(sectionY.top);

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  opacity.forEach((element) => {
    element.style.opacity = scroll / (sectionY.top + sectionHeight);
  });

  bigTitle.style.opacity = -scroll / (headerHeight / 2) + 1;
  shadow.style.height = `${scroll * 0.5 + 50}px`;

  content.style.transform = `translateY(${
    (scroll / (sectionHeight + sectionY.top)) * 60 - 60
  }px)`;

  imgContainer.style.transform = `translateY(${
    (scroll / (sectionHeight + sectionY.top)) * - 50 + 50
  }px)`;

  border.style.width = `${(scroll / (sectionY.top + sectionHeight)) * 30}%`;
});
