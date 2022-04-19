import { refs } from './refs';
// const refs = {
//     queue: document.querySelector('#queue'),
//     watched: document.querySelector('#watched'),
//     home: document.querySelector('#home'),
//     library: document.querySelector('#library'),
//     input: document.querySelector('#input'),
//     buttonLibrary: document.querySelector('.but__container'),
//     background: document.querySelector('#background'),
//     headerScroll: document.querySelector('.scroll'),
//     progressContainer: document.querySelector('.progress-container')
// };

refs.queue.addEventListener('click', clickButQueue);
refs.watched.addEventListener('click', clickButWatched);
refs.home.addEventListener('click', clickButHome);
refs.library.addEventListener('click', clickButLibrary);

function clickButHome(e) {
  e.preventDefault();
  location.reload();
  refs.pagination.classList.remove('is-hidden');
  refs.home.classList.add('current');
  refs.library.classList.remove('current');
  refs.buttonLibrary.classList.add('visually-hidden');
  refs.input.classList.remove('visually-hidden');
  refs.background.classList.add('header');
  refs.background.classList.remove('library');
}

function clickButLibrary(e) {
  e.preventDefault();
  refs.pagination.classList.add('is-hidden');
  refs.library.classList.add('current');
  refs.home.classList.remove('current');
  refs.input.classList.add('visually-hidden');
  refs.buttonLibrary.classList.remove('visually-hidden');
  refs.background.classList.add('library');
  refs.background.classList.remove('header');
}

function clickButQueue() {
  refs.queue.classList.add('library__current');
  refs.watched.classList.remove('library__current');
}

function clickButWatched() {
  refs.watched.classList.add('library__current');
  refs.queue.classList.remove('library__current');
}

window.onscroll = function () {
  startBar();
};

function startBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';
}
