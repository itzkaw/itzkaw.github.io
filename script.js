document.addEventListener("DOMContentLoaded", () => {

  console.log("Portfolio loaded 🚀");

  // =========================
  // FADE-IN ANIMATION
  // =========================
document.addEventListener("DOMContentLoaded", () => {

  // fade-in sections 
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(sec => observer.observe(sec));

});


  // =========================
  


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
