const navItems = document.querySelector(".nav__items");
const navLinks = document.querySelectorAll("#nav__links");
// Open nav

const navSlider = () => {
  const openNav = document.querySelector(".menuBtn");
  openNav.addEventListener("click", (e) => {
    console.log(e.target);
    navItems.classList.toggle("active");
    openNav.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navItems.classList.remove("active");
      openNav.classList.remove("active");
    });
  });
};

navSlider();
