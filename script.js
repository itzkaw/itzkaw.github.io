document.addEventListener("DOMContentLoaded", () => {

  console.log("Portfolio loaded 🚀");

  // =========================
  // FADE-IN SECTIONS
  // =========================
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(sec => observer.observe(sec));


  // =========================
  // TYPE EFFECT (Hero subtitle)
  // =========================
  const roles = [
  "Aspiring Data Analyst",
  "Power BI Developer",
  "SQL Enthusiast",
  "Data Storyteller"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing-text");

function typeRoles() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentRole.substring(0, charIndex);

  let speed = isDeleting ? 50 : 90;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1500;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeRoles, speed);
}

typeRoles();


  // =========================
  // ACTIVE NAV SCROLL
  // =========================
  const navLinks = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

});
