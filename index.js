const translate = document.querySelectorAll(".translate");
const bigTitle = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const aboutSection = document.querySelector(".about");
const skillsSection = document.querySelector(".skills-container");
const imgContainer = document.querySelector(".img-container");
// const langIcon = document.querySelector(".lang-icon");

let headerHeight = header.offsetHeight;
let aboutSectionHeight = aboutSection.offsetHeight;
let skillsSectionHeight = skillsSection.offsetHeight;

// console.log("this is headerHeight", headerHeight);
// console.log("this is sectionHeight", aboutSectionHeight);

function characterMoveAbout() {
  var characterContainer = document.querySelector(".Character");
  var character = document.querySelector(".Character_spritesheet");
  var characterPositionFromTop = character.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;

  if (characterPositionFromTop < screenPosition) {
    character.classList.add("face-right");
    characterContainer.classList.add("going-right");

    setTimeout(() => {
      characterContainer.style.transform = "translate(120%, -50%)";
      content.style.display = "block";
      character.classList.remove("face-right");
      window.removeEventListener("scroll", characterMoveAbout);
    }, 3000);
  }
}

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  bigTitle.style.opacity = -scroll / (headerHeight / 3.5) + 1;
  shadow.style.height = `${scroll * 0.5 + 10}px`;

  characterMoveAbout();
});
