console.log("JavaScript is working!");
console.log("Portfolio loaded 🚀");
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  observer.observe(section);
});

//toggling 

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggle.textContent = "🌙";
  } else {
    toggle.textContent = "☀️";
  }
});


const text = "Data Analyst • Power BI • SQL • Data Storytelling";
let i = 0;

function typeEffect() {
  const el = document.querySelector(".subtitle");
  if (!el) return;

  el.textContent = text.slice(0, i);
  i++;

  if (i <= text.length) {
    setTimeout(typeEffect, 60);
  }
}

window.addEventListener("load", typeEffect);
