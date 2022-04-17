import { getFilmById } from './fetch';
import { getMovies } from './fetch';
import { renderCardModalMurkup } from './cardModalMurkup';

const openModal = document.querySelector('.film-list');
const backdropCardModal = document.querySelector('.backdrop--card');
const boxCardModal = document.querySelector('.card-modal__container');
// console.log(openModal);
// console.log(backdropCardModal);
// console.log(boxCardModal);

openModal.addEventListener('click', openModalCard);

function openModalCard(e) {
  const curLink = e.target.closest('.card__link');
  if (!curLink) {
    return;
  }
  const curFilm = curLink.id;

  getFilmById(curFilm)
    .then(data => {
      // console.log(data);
      renderCardModalMurkup(data);
    })
    .catch(e => {
      console.log(e);
    });

  backdropCardModal.classList.remove('is-hidden');
}
