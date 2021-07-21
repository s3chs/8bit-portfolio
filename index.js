var screenPosition = window.innerHeight / 2;
var screenPositionLater = window.innerHeight / 9;

// HEADER VARIABLES //
const translate = document.querySelectorAll(".translate");
const bigTitle = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
let headerHeight = header.offsetHeight;

// ABOUT VARIABLES //
const aboutSection = document.querySelector(".about");
const content = document.querySelector(".content");
const title = document.querySelector(".title");
const texts = document.querySelectorAll(".text");
const border = document.querySelector(".border");
let aboutSectionHeight = aboutSection.offsetHeight;
const imgContainer = document.querySelector(".img-container");
var playFirstAnim = true;
var playSecondAnim = false;

// SKILLS VARIABLES //
const skillsSection = document.querySelector(".skills-container");
const skillTitle = document.querySelector(".skill-title");
const langIcons = document.querySelectorAll(".lang-icon");
const langTexts = document.querySelectorAll(".lang-text");
let skillsSectionHeight = skillsSection.offsetHeight;

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  bigTitle.style.opacity = -scroll / (headerHeight / 3.5) + 1;
  shadow.style.height = `${scroll * 0.5 + 10}px`;

  characterMoveAbout();
  characterMoveSkills();
});

function characterMoveAbout() {
  var characterContainer = document.querySelector(".Character");
  var character = document.querySelector(".Character_spritesheet");
  var characterPositionFromTop = character.getBoundingClientRect().top;

  if (characterPositionFromTop < screenPosition && playFirstAnim) {
    character.classList.add("face-right");
    characterContainer.classList.add("going-right");

    setTimeout(() => {
      texts.forEach((elem) => elem.classList.toggle("active"));
      title.classList.toggle("active");
      border.classList.toggle("active");
      content.style.display = "block";
      character.classList.remove("face-right");
      playFirstAnim = false;
      playSecondAnim = true;
    }, 2000);
  }
}

function characterMoveSkills() {
  var characterContainer = document.querySelector(".Character");
  var character = document.querySelector(".Character_spritesheet");
  var characterPositionFromTop = character.getBoundingClientRect().top;
  if (characterPositionFromTop < screenPositionLater && playSecondAnim) {
    characterContainer.classList.add("going-down");

    setTimeout(() => {
      character.classList.add("face-left");
      characterContainer.classList.add("going-left");
      setTimeout(() => {
        title.classList.toggle("active");
        character.classList.remove("face-left");
        skillTitle.classList.toggle("active");
        skillTitle.style.display = "block";
        langTexts.forEach((elem) => {
          elem.classList.toggle("active");
          elem.style.display = "block";
        });
        langIcons.forEach((elem) => {
          elem.classList.toggle("active");
          elem.style.display = "block";
        });
        playSecondAnim = false;
      }, 1500);
    }, 1500);
  }
}
