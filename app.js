function DataJS(element, array = false) {
  const query = `[data-js="${element}"]`;
  if (array) return document.querySelectorAll(query);
  return document.querySelector(query);
}

// Responsive navbar
const toggleCollapse = document.querySelector('.toggle-collapse');
const navbarCollapse = document.querySelector('.navbar-collapse');
const collapse = document.querySelector('.collapse');

toggleCollapse.addEventListener('click', (e) => {
  navbarCollapse.classList.toggle('collapse');
});



// Add class active to nav links
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.navItem');

window.addEventListener('scroll', () => {
  const current =
    sections.length -
    [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 86) -
    1;
  if (current === sections.length) return;

  navItems.forEach((navItem) => {
    navItem.classList.remove('active');
  });
  navItems[current].classList.add('active');
});



// Make elemenst fade in and out
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.replace('fadeOut', 'fadeIn');
    }
  });
}

const fadeElms = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(observerCallback, observerOptions);
fadeElms.forEach((el) => observer.observe(el));

// Close responsive navbar after click
navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    navbarCollapse.classList.remove('collapse');
  })
});
