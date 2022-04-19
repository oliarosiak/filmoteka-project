import { refs } from './refs';

document.addEventListener('scroll', onHeaderFixed);

function onHeaderFixed() {
  if (
    window.scrollY > refs.background.clientHeight &&
    document.documentElement.scrollHeight - refs.background.clientHeight > 800
  ) {
    refs.background.classList.add('header--fixed');
  } else {
    refs.background.classList.remove('header--fixed');
  }
}
