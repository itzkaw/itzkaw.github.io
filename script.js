document.addEventListener("DOMContentLoaded", () => {

  console.log("Portfolio loaded 🚀");

  // =========================
  // FADE-IN ANIMATION
  // =========================
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => observer.observe(section));


  // =========================
  // THEME TOGGLE
  // =========================
  const toggle = document.getElementById("themeToggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light");

      toggle.textContent =
        document.body.classList.contains("light") ? "🌙" : "☀️";
    });
  }


  // =========================
  // TYPE EFFECT
  // =========================
  const text = "Data Analyst • Power BI • SQL • Data Storytelling";
  let i = 0;

  function typeEffect() {
    const el = document.querySelector(".subtitle");
    if (!el) return;

    el.textContent = text.slice(0, i);
    i++;

    if (i <= text.length) {
      setTimeout(typeEffect, 50);
    }
  }

  typeEffect();


  // =========================
  // ACTIVE NAV
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
