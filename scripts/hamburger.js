function toggleLanguageMenu() {
  const menu = document.querySelector('.language-menu');
  menu.classList.toggle('open');
}

window.addEventListener('resize', function() {
  const menu = document.querySelector('.language-menu');
  if (window.innerWidth < 768) {
    menu.classList.remove('open');
  }
});
function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('open');
}

window.addEventListener('resize', function() {
  const menu = document.querySelector('.menu');
  if (window.innerWidth < 768) {
    menu.classList.remove('open');
  }
});