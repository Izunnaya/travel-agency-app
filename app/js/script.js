const navItems = document.querySelector(".nav__items");
const navLinks = document.querySelectorAll("#nav__links");

const navSlider = () => {
  // Open nav
  const openNav = document.querySelector(".menuBtn");
  openNav.addEventListener("click", (e) => {
    console.log(e.target);
    navItems.classList.toggle("active");
    openNav.classList.toggle("active");
  });

  // This is the function that runs when each link is clicked.
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navItems.classList.remove("active");
      openNav.classList.remove("active");
    });
  });
};

navSlider();
