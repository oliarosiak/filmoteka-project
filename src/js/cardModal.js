import { getFilmById } from './fetch';
import { renderCardModalMurkup } from './cardModalMurkup';

const openModal = document.querySelector('.film-list');
const backdropCardModal = document.querySelector('.backdrop--card');
const boxCardModal = document.querySelector('.card-modal__container');


const buttonCloseModal = document.querySelector(".card-modal__button-close");

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
// МАРТА, якщо ти не заливала код на кнопку закриття модалки- то цей код вроді робочий) 

// function onCloseButtonClick() {
//   const backdropCardModal = document.querySelector('.backdrop--card');
//   const cardModalInfo = document.querySelector('.card-modal__information-box');
//   const cardModalImg = document.querySelector('.card-modal__image-box');

//   cardModalImg.remove();
//   cardModalInfo.remove();

//   backdropCardModal.classList.add('is-hidden');

//   document.body.style.overflow = 'scroll';
  
// }

