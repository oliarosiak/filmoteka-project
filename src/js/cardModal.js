

//---------------------
// import { getMovies } from './fetch'
import { getFilmById } from './fetch';

// getMovies().then((data) => renderCardMurkup(data)).catch((e) => {
//     console.log(e)
// });

// ------------
const openModal = document.querySelector('.film-list');
const backdropCardModal = document.querySelector(".backdrop--card");
const boxCardModal = document.querySelector(".card-modal__discription-box");
console.log(openModal);
console.log(backdropCardModal);
console.log(boxCardModal);

openModal.addEventListener("click", openModalCard);

function openModalCard(e) {
    const curLink = e.target.closest('.card__link');
    if (!curLink) {
      return;
    }
    const curFilm = curLink.id;
    getFilmById(curFilm)
      .then(data => {
        //  ЗРОБИТИ РЕНДЕР
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
    backdropCardModal.classList.remove('is-hidden');
  }