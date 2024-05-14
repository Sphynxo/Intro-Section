const dropdowns = document.querySelectorAll(".dropdown");
const featuresDropdown = document.querySelector(".features-content");
const companyDropdown = document.querySelector(".company-content");
const nav = document.querySelector(".main-nav");
const blur = document.querySelector(".blur");
const menuBtn = document.querySelector(".menu");
let menuOpen = undefined;

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", function () {
    const dropdownContent = this.querySelector(".dropdown-content");
    const arrowDown = this.querySelector(".arrow-down");

    if (dropdownContent.classList.contains("hide")) {
      hideAllDropdowns();
      dropdownContent.classList.remove("hide");
      arrowDown.src = "IMG/icon-arrow-up.svg";
    } else {
      dropdownContent.classList.add("hide");
      arrowDown.src = "IMG/icon-arrow-down.svg";
    }
  });
});

function hideAllDropdowns() {
  featuresDropdown.classList.add("hide");
  document.querySelector(".features .arrow-down").src =
    "IMG/icon-arrow-down.svg";
  companyDropdown.classList.add("hide");
  document.querySelector(".company .arrow-down").src =
    "IMG/icon-arrow-down.svg";
}

window.addEventListener("click", function (event) {
  const isDropdownButton =
    event.target.matches(".dropdown") || event.target.closest(".dropdown");
  const isDropdownContent = event.target.closest(".dropdown-content");

  if (!isDropdownButton && !isDropdownContent) {
    hideAllDropdowns();
  }
});

menuBtn.addEventListener("click", function () {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuBtn.classList.remove("close");
    nav.classList.add("nav-open");
    blur.classList.add("blur-in");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuBtn.classList.add("close");
    nav.classList.remove("nav-open");
    blur.classList.remove("blur-in");
    menuOpen = false;
  }
});
