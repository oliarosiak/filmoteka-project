import { onfetchTrailers } from './fetch';
import * as basicLightbox from 'basiclightbox';

//onfetchTrailers(25165);
/**@param {onst filmDetailsKey = 'DetailsFilmsCurrentPage';
const filmIDsKey = 'FilmIDs';

export function trailer(e) {
    const films = lsData.load(filmDetailsKey);
    //const genres = lsData.load(filmIDsKey);
    const currentTrailerId = Number(e.target.dataset.id);
    //const clickedTrailer = films.find(film => film.id === currentTrailerId);
    if (filmTrailers === true) {
        onfetchTrailers(currentTrailerId).then((data) => trailerRender(data)).catch((e) => {
    console.log(e)
    })
    }
    const modalFilmWindow = document.querySelector('.card-modal');

    setTimeout(() => {
        modalFilmWindow.classList.add('is-open');
    }, 0);
    const trailerBtn = document.querySelector('.modal-film__play-btn');
    trailerBtn.addEventListener('click', trailer(e));
}} data 
 */
/**
 * const filmTrailers = new onfetchTrailers();
export async function trailer(e) {
  filmTrailers 
    .onfetchTrailers(Number(e.target.dataset.filmId))
    .then(data => {
      trailerRender(data);
    })
    .catch(console.log);
} 
*/
//----------------------------------------------------

/*function closeClickButtonImage(event) {
    if(event.code === "Escape" || event.code === "Esc"){
        instance.close(() => {
            removeEventListenerContainer();
        });
    }
}

// Removes the event listener from the item
function removeEventListenerContainer () {
    galleryContainer.removeEventListener("keydown", closeClickButtonImage)
}*/
//const trailerBtn = document.querySelector('.modal-film__play-btn');
//trailerBtn.addEventListener('click', trailer(e));
//document.addEventListener('keydown', onEscClose);

 //   function onEscClose(e) {
 //     if (e.code === 'Escape') {
 //       modalFilmWindow.classList.remove('is-open');

  //      setTimeout(() => {
  //        clearModal();
  //      }, 250);
  //    }

function trailerRender(data) {
    const btnModalTrailer = document.querySelector('.modal-film__play-btn');

    const instance = basicLightbox.create(
    `<div class="modal-trailer__backdrop">
        <iframe class="iframe" width="640" height="480" frameborder="0" allowfullscreen allow='autoplay'
            src="https://www.youtube.com/embed/${data.results[0].key}?autoplay=1" >
        </iframe>
    </div>`,
    {
        onShow: instance => {
            instance.element().onclick = instance.close;
            document.addEventListener('keydown', onEscClose);
        },
    },
    {
        onClose: instance => {
            document.removeEventListener('keydown', onEscClose);
            console.log(instance);
        },
    },);
    function onEscClose(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
    btnModalTrailer.addEventListener('click', () => {
        instance.show();
    });
}
