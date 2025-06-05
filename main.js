document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".page-section");
  const toggleButton = document.getElementById("menuToggle");
  const dropdownMenu = document.getElementById("dropdownMenu");

  // Toggle dropdown menu
  toggleButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });

  function showSection(id) {
    sections.forEach(section => {
      section.style.display = section.id === id ? "block" : "none";
    });
    window.scrollTo(0, 0);
  }

  // Handle nav link clicks
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.getAttribute("data-page");
      showSection(page);
    });
  });

  // Default to showing "index" on load
  showSection("index");
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".reveal-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = button.closest(".companion-card");
      card.classList.toggle("active");
    });
  });
});