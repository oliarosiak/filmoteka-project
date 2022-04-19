import { getFilmById } from './fetch';
import { renderCardModalMurkup } from './cardModalMurkup';



const openModal = document.querySelector('.film-list');
const backdropCardModal = document.querySelector('.backdrop--card');
const boxCardModal = document.querySelector('.card-modal__container');

const buttonCloseModal = document.querySelector('.card-modal__button-close');

// console.log(openModal);
// console.log(backdropCardModal);
// console.log(boxCardModal);

openModal.addEventListener('click', openModalCard);
buttonCloseModal.addEventListener("click",onCloseButtonClick);

function openModalCard(e) {
  const curLink = e.target.closest('.card__link');
  if (!curLink) {
    return;
  }
  const curFilm = curLink.id;

  getFilmById(curFilm)
    .then(data => {
      // console.log(data);
      boxCardModal.insertAdjacentHTML('beforeend', renderCardModalMurkup(data));
    })
    .catch(e => {
      console.log(e);
    });

  backdropCardModal.classList.remove('is-hidden');
}

//-------- Кнопка закриття

document.addEventListener('keydown', onEscBtnPress);
document.addEventListener('click', onBackdropClick);

function onCloseButtonClick() {
  const backdropCardModal = document.querySelector('.backdrop--card');
  const cardModalInfo = document.querySelector('.card-modal__information-box');
  const cardModalImg = document.querySelector('.card-modal__image-box');

  cardModalImg.remove();
  cardModalInfo.remove();

  backdropCardModal.classList.add('is-hidden');

  document.body.style.overflow = 'scroll';
  
}

function onEscBtnPress(e) {
  if (e.code === 'Escape') {
    onCloseButtonClick();
  }
}

function onBackdropClick(e) {
  if (e.target === backdropCardModal) {
    onCloseButtonClick();
  }
}