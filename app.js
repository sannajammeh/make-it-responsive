function DataJS(element, array = false) {
  const query = `[data-js="${element}"]`;
  if (array) return document.querySelectorAll(query);
  return document.querySelector(query);
}

const toggleCollapse = document.querySelector(".toggle-collapse");
const navbarCollapse = document.querySelector(".navbar-collapse");
const collapse = document.querySelector(".collapse");

toggleCollapse.addEventListener("click", e => {
    navbarCollapse.classList.toggle("collapse");
});
