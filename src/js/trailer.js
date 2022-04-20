import * as basicLightbox from 'basiclightbox';
import { onfetchTrailers } from './fetch';

const mainContainer = document.querySelector('.film-list');

export default function onTrailerClick() {
    mainContainer.addEventListener('click', watchTrailer);
}

function watchTrailer(e) {
    e.preventDefault();

    if (e.target.closest('.card__link')?.querySelector('card__img') === undefined) {
        return;
    }

    onfetchTrailers(e.target.closest('.card__link').id)
        .then(data => {
            trailerRender(data);
        })
        .catch(error => {
            console.log(error);
        });
}

function trailerRender(data) {
    const btnModalTrailer = document.querySelector('.card-modal__image-box');

    const instance = basicLightbox.create(
        `<iframe class="iframe" width="640" height="480" frameborder="0" allowfullscreen allow='autoplay'
            src="https://www.youtube.com/embed/${data.results[0].key}?autoplay=1" >
        </iframe>`,
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
        });
    
    function onEscClose(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
    btnModalTrailer.addEventListener('click', () => {
        instance.show();
    });
}