let nav = document.querySelectorAll(".nav-list");
let downBtn = document.querySelectorAll("#down");
let upBtn = document.querySelectorAll("#up");
let openNav = document.getElementById("open");
let closeNav = document.getElementById("close");

let mobileNav = document.querySelector(".mobile-nav");

openNav.addEventListener("click", () => {
  closeNav.style.display = "flex";
  openNav.style.display = "none";
  mobileNav.style.display = "flex";
});

closeNav.addEventListener("click", () => {
  openNav.style.display = "flex";
  closeNav.style.display = "none";
  mobileNav.style.display = "none";
});

for (let i = 0; i < downBtn.length; i++) {
  downBtn[i].addEventListener("click", () => {
    nav[i].style.display = "flex";
    upBtn[i].style.display = "flex";
    downBtn[i].style.display = "none";
  });
}

for (let i = 0; i < upBtn.length; i++) {
  upBtn[i].addEventListener("click", () => {
    nav[i].style.display = "none";
    upBtn[i].style.display = "none";
    downBtn[i].style.display = "flex";
  });
}

let deskDown = document.querySelectorAll("#desk-down");
let deskUp = document.querySelectorAll("#desk-up");
let deskNav = document.querySelectorAll(".desk-nav-list");
let deskName = document.querySelectorAll("#desk-name");
let deskName2 = document.querySelectorAll("#desk-name2");

for (let i = 0; i < deskDown.length; i++) {
  deskDown[i].addEventListener("click", () => {
    deskDown[i].style.display = "none";
    deskUp[i].style.display = "flex";
    deskNav[i].style.display = "flex";
  });
}

for (let i = 0; i < deskUp.length; i++) {
  deskUp[i].addEventListener("click", () => {
    deskDown[i].style.display = "flex";
    deskUp[i].style.display = "none";
    deskNav[i].style.display = "none";
  });
}

for (let i = 0; i < deskName.length; i++) {
  deskName[i].addEventListener("click", () => {
    deskNav[i].style.display = "flex";
    deskUp[i].style.display = "flex";
    deskDown[i].style.display = "none";
    deskName2[i].style.display = "flex";
    deskName[i].style.display = "none";
  });
}

for (let i = 0; i < deskName2.length; i++) {
  deskName2[i].addEventListener("click", () => {
    deskNav[i].style.display = "none";
    deskUp[i].style.display = "none";
    deskDown[i].style.display = "flex";
    deskName2[i].style.display = "none";
    deskName[i].style.display = "flex";
  });
}
