const headerFixed = document.querySelector('.header');
document.addEventListener('scroll', onHeaderFixed);

function onHeaderFixed() {
  if (window.scrollY > 220) {
    headerFixed.classList.add('header--fixed');
  } else {
    headerFixed.classList.remove('header--fixed');
  }
}
