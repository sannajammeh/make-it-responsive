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
  if (current === sections.length) return document.title = `Inova | Prosphering Innovation`;

  navItems.forEach((navItem) => {
    navItem.classList.remove('active');
  });
  const currentItem = navItems[current]; 
  currentItem.classList.add('active');
  document.title = `Inova | ${currentItem.innerHTML}`;
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
navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navbarCollapse.classList.remove('collapse');
  });
});

// Using a closure to avoid namespace pollution.
(() => {
  const heroSections = [
    {
      img:
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
      title: 'Channel your inner entrepreneur.',
      subtitle: 'Join us at Oct 27th.',
    },
    {
      img:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      title: 'Get the most out of frugal innovation.',
      subtitle: 'Join us at Oct 27th.',
      reversed: true,
    },
    {
      img:
        'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      title: 'Become truly innovative',
      subtitle:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, perspiciatis.',
    },
  ];
  // Generate hero sections
  const heroContainer = DataJS('hero-container');
  heroContainer.innerHTML = heroSections
    .map(
      (section) => /*html*/ `
<div class="hero-brand ${section.reversed ? 'reversed' : ''}" data-js="hero-item">
    <div class="hero-fade"></div>
    <img src="${section.img}" alt="${section.title}" />
    <div class="hero-text">
        <h1 class="hero-title">${section.title}</h1>
        <div class="d-flex align-items-center hero-subtitle-container">
            <h2 class="hero-subtitle">${section.subtitle}</h2>
            <a title="Join innovation camp" href="#innovation-camps" role="button" class="button button-primary small ml-2 d-block hero-action"><div>Join us</div></a>
        </div>
    </div>
</div>`
    )
    .join('');

  // Get hero - pass in true to all items as array
  const heroItems = [...DataJS('hero-item', true)];
  const total = heroItems.length;
  let currentIndex = 0;

  // Start the hero carousel
  heroItems[currentIndex].classList.add('show');
  const interval = setInterval(() => {
    heroItems.map((item) => item.classList.remove('show'));
    const item = heroItems[currentIndex];
    item.classList.add('show');
    ++currentIndex;
    if (currentIndex >= total) {
      currentIndex = 0;
    }
  }, 3500);
  // If no hero items, dont do anything.
  !total && clearInterval(interval);
})();
