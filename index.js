const translate = document.querySelectorAll(".translate");
const bigTitle = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const aboutSection = document.querySelector(".about");
const skillsSection = document.querySelector(".skills .container");
const imgContainer = document.querySelector(".img-container");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");
const langIcon = document.querySelector(".lang-icon");

let headerHeight = header.offsetHeight;
let aboutSectionHeight = aboutSection.offsetHeight;
let skillsSectionHeight = skillsSection.offsetHeight;

console.log("this is headerHeight", headerHeight);
console.log("this is sectionHeight", aboutSectionHeight);

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  let aboutSectionY = aboutSection.getBoundingClientRect();
  let skillsSectionY = skillsSection.getBoundingClientRect();
  console.log("this is the scroll", scroll);
  console.log("this is sectionYtop", aboutSectionY.top);
  console.log(border.style.width);
  // console.log("this is sectionYbottom", sectionY.bottom);

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  opacity.forEach((element) => {
    element.style.opacity = scroll / (aboutSectionY.top + aboutSectionHeight);
  });

  bigTitle.style.opacity = -scroll / (headerHeight / 3.5) + 1;
  shadow.style.height = `${scroll * 0.5 + 10}px`;

  content.style.transform = `translateY(${
    (scroll / (aboutSectionHeight + aboutSectionY.top)) * -60 + 60
  }px)`;

  imgContainer.style.transform = `translateY(${
    (scroll / (aboutSectionHeight + aboutSectionY.top)) * -60 + 60
  }px)`;

  border.style.width = `${
    (scroll / (aboutSectionY.top + aboutSectionHeight)) * 25
  }%`;

  skillsSection.style.transform = `translateY(${
    (scroll / (skillsSectionHeight + skillsSectionY.top)) * -60 + 60
  }px)`;
  
});
