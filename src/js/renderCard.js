import { refs } from './refs';

//---------------------
import { getMovies } from './fetch'
// import { getMovies } from './js/fetch';
// import { renderCardMurkup } from './js/renderCard';


getMovies().then((data) => renderCardMurkup(data)).catch((e) => {
    console.log(e)
});
//------------------------

export function renderCardMurkup(data) {
    const galleryMarkup = data.results.map(({id, poster_path, title, genre_ids, release_date, vote_average }) => {
        return `<li class="card">
                    <a href="#${id}" class="card__link" id="${id}">
                        <img class="card__img" src="http://image.tmdb.org/t/p/w300${poster_path}" alt="photo" />
                        <div class="card__information">
                            <h2 class="card__name">${title}</h2>
                            <div class="card__inf">
                                <p class="card__genre">${genre_ids} | ${release_date}</p>
                                <p class="card__rating">${vote_average}</p>
                            </div>
                        </div>
                    </a>
                </li>`
    }).join('');
    refs.startFilmList.insertAdjacentHTML('beforeend', galleryMarkup);

};
