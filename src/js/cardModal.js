import { refs } from './refs';

//---------------------
import { getMovies } from './fetch'
// import { getMovies } from './js/fetch';
// import { renderCardMurkup } from './js/renderCard';


getMovies().then((data) => renderCardMurkup(data)).catch((e) => {
    console.log(e)
});



// ------------
const openModal = document.querySelector('.film-list');
const backdropCardModal = document.querySelector(".backdrop--card");
// const boxCardModal = document.querySelector(".card-modal");
console.log(openModal);
console.log(backdropCardModal);
// console.log(boxCardModal);

openModal.addEventListener("click", openModalCard);

function openModalCard (event) {
    if (!event.target.closest('.card__link')) {
        return;
      }
   
    console.log(event.target);
    backdropCardModal.classList.remove('is-hidden');

    
}