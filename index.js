const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("ul");
  console.log(navMenu)

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
