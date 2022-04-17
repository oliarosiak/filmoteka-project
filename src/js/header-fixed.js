const headerFixed = document.querySelector('.header');
const paginationNotHidden = document.getElementById('pagination');

document.addEventListener('scroll', onHeaderFixed);

function onHeaderFixed() {
  if (window.scrollY > 60 && !paginationNotHidden.classList.contains('is-hidden')) {
    headerFixed.classList.add('header--fixed');
  } else {
    headerFixed.classList.remove('header--fixed');
  }
}
