// Run after the DOM is ready
window.addEventListener('DOMContentLoaded', () => {
const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

const btn = document.getElementById('surprise-btn');
const msg = document.getElementById('surprise-text');

btn.addEventListener('click', () => {
msg.hidden = !msg.hidden; // toggle visibility
});
});

window.addEventListener("DOMContentLoaded", () => {
     // safe to use all your elements here
  const facts = document.querySelector("#fun-facts");

  facts.addEventListener("click", () => {
    alert("You clicked the fun facts section!");
  });
});

window.addEventListener("DOMContentLoaded", () => {
     // safe to use all your elements here
const btn = document.getElementById('hello-btn');
const msg = document.getElementById('hello-text');

btn.addEventListener('click', () => {
msg.hidden = !msg.hidden; // toggle visibility
  });
});

window.addEventListener("DOMContentLoaded", () => {
     // safe to use all your elements here
const btn = document.getElementById('dont-click-btn');
const msg = document.getElementById('dont-click-text');

btn.addEventListener('click', () => {
msg.hidden = !msg.hidden; // toggle visibility
  });
});