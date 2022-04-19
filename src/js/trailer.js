//import { onfetchTrailers } from './fetch';
//import * as basicLightbox from 'basiclightbox';

//onfetchTrailers(25165);

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

/**
 * function trailerRender(data) {
    const btnModalTrailer = document.querySelector('.btn-trailer');

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

 */

import * as basicLightbox from 'basiclightbox';
import { onfetchTrailers } from './fetch';

let trailer;
const mainContainer = document.querySelector('.film-list');

export default function onTrailerClick() {
    mainContainer.addEventListener('click', watchTrailer);
}

// add event listener 
function watchTrailer(e) {
    e.preventDefault();

    if (e.target.closest('.card__link')?.querySelector('card__img') === undefined) {
        return;
    }

    onfetchTrailers(e.target.closest('.card__link').id)
        .then(renderTrailer)
        .catch(error => {
            console.log(error);
        });
    }

// movie by ID /////
// onfetchTrailers()
// Render trailer modal card

function renderTrailer(data) {
    let key = '';
    data.forEach(obj => {
        if (obj.name.includes('Official')) {
            key = obj.key;
        }
    });

    creatTrailerLink(key);

  // close trailer by Escape
    window.addEventListener('keydown', closeTrailerByEsc);
}

function closeTrailerByEsc(e) {
    if (e.code === 'Escape') {
        trailer.close();
        window.removeEventListener('keydown', closeTrailerByEsc);
    }
}

// trailer key link YouTube
function creatTrailerLink(key) {
    trailer = basicLightbox.create(`
        <iframe width="320" height="240"
        src='https://www.youtube.com/embed/${key}'
        frameborder="0" allow="accelerometer; autoplay; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="trailer_video"></iframe>
        `);

    //ad listener and time = 200
    const trailerBtn = document.querySelector('.card-modal__banner');
    trailerBtn.addEventListener('click', showTrailer);
    
    
    // watch video
    function showTrailer() {
        trailer.show();
    }
}
