const scrollBtn = document.querySelector('.scroll-btn');

document.addEventListener('scroll', scrollPage);
// window.addEventListener('scroll', scrollPage);
scrollBtn.addEventListener('click', scrollToTop);

function scrollPage() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
