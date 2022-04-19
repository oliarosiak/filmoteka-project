const headerFixed = document.querySelector('#background');

document.addEventListener('scroll', onHeaderFixed);

function onHeaderFixed() {
  if (
    window.scrollY > headerFixed.clientHeight &&
    document.documentElement.scrollHeight - headerFixed.clientHeight > 800
  ) {
    headerFixed.classList.add('header--fixed');
  } else {
    headerFixed.classList.remove('header--fixed');
  }
}
