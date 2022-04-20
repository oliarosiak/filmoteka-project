import { refs } from './refs';
import { renderCardMurkupLibreary } from './render-сard';
import { clearRender } from './clearRender';

const container = document.getElementById('pagination');

function watchedRender() {
  clearRender();
  const watched = JSON.parse(localStorage.getItem('UserFilmWatched'));

  // watched.length <= 20
  //   ? container.classList.add('is-hidden')
  //   : container.classList.remove('is-hidden');
  container.classList.add('is-hidden');

  renderCardMurkupLibreary(watched);
}
function queueRender() {
  clearRender();
  const queue = JSON.parse(localStorage.getItem('UserFilmQueue'));

  renderCardMurkupLibreary(queue);
}

refs.library.addEventListener('click', () => {
  clearRender();
  if (refs.watched.classList.contains('library__current')) {
    watchedRender();
  } else if (refs.queue.classList.contains('library__current')) {
    queueRender();
  }
});

refs.watched.addEventListener('click', watchedRender);
refs.queue.addEventListener('click', queueRender);
