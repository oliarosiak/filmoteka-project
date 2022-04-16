import { refs } from './refs';
import { renderCardMurkupLibreary } from './render-сard';
import { clearRender } from './clearRender';

const queue = JSON.parse(localStorage.getItem('UserFilmQueue'));
const watched = JSON.parse(localStorage.getItem('UserFilmWatched'));

function watchedRender() {
  clearRender();
  renderCardMurkupLibreary(watched);
}
function queueRender() {
  clearRender();
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
