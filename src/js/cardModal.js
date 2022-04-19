import { getFilmById } from './fetch';
import { renderCardModalMurkup } from './cardModalMurkup';
import { refs } from './refs';
import onTrailerClick from './trailer'

refs.homeFilmList.addEventListener('click', openModalCard);

function openModalCard(e) {
  const curLink = e.target.closest('.card__link');
  if (!curLink) {
    return;
  }
  const curFilm = curLink.id;

  getFilmById(curFilm)
    .then(data => {
      // console.log(data);
      refs.boxCardModal.insertAdjacentHTML('afterbegin', renderCardModalMurkup(data));
    })
    .catch(e => {
      console.log(e);
    });

  document.body.style.overflow = 'scroll';
  refs.backdropCardModal.classList.remove('is-hidden');

  refs.buttonCloseModal.addEventListener('click', closeModalCard);
  refs.backdropCardModal.addEventListener('click', closeModalCard);
  window.addEventListener(`keydown`, closeModalCard);
}

onTrailerClick();

function closeModalCard(e) {
  if (
    e.target === refs.backdropCardModal ||
    e.currentTarget === refs.buttonCloseModal ||
    e.code === 'Escape'
  ) {
    refs.backdropCardModal.classList.add('is-hidden');
    refs.boxCardModal.innerHTML = '';

    refs.buttonCloseModal.removeEventListener('click', closeModalCard);
    refs.backdropCardModal.removeEventListener('click', closeModalCard);
    window.removeEventListener('keydown', closeModalCard);
  }
}
