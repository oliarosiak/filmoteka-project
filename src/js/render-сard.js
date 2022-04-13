import { refs } from './refs';
import {genres} from './genres.json';

//---------------------
// import { getMovies } from './fetch'


// getMovies().then((data) => { renderCardMurkup(data) }).catch((e) => {
//     console.log(e)
// });
//функція рендеру основної сторінки
export function renderCardMurkup(data) {
    const galleryMarkup = data.results.map(({ id, poster_path, title, genre_ids, release_date}) => {
        let genreName = genre_ids
            .map(id => genres.filter(element => element.id === id))
            .flat()
            .map(element => element.name);
        return `<li class="card">
                    <a href="#${id}" class="card__link" id="${id}">
                        <img class="card__img" src="http://image.tmdb.org/t/p/w300${poster_path}" alt="photo" />
                        <div class="card__information">
                            <h2 class="card__name">${title}</h2>
                            <div class="card__inf">
                                <p class="card__genre">${genreName.slice(0, 3)} | ${release_date.slice(0, 4)}</p>
                            </div>
                        </div>
                    </a>
                </li>`
    }).join('');
    refs.homeFilmList.insertAdjacentHTML('beforeend', galleryMarkup);
};

//функція рендеру сторінки бібліотеки

export function renderCardMurkupLibreary(data) {
    const galleryMarkup = data.results.map(({ id, poster_path, title, genre_ids, release_date, vote_average }) => {
        let genreName = genre_ids
            .map(id => genres.filter(element => element.id === id))
            .flat()
            .map(element => element.name);
        return `<li class="card">
                    <a href="#${id}" class="card__link" id="${id}">
                        <img class="card__img" src="http://image.tmdb.org/t/p/w300${poster_path}" alt="photo" />
                        <div class="card__information">
                            <h2 class="card__name">${title}</h2>
                            <div class="card__inf">
                                <p class="card__genre">${genreName.slice(0, 3)} | ${release_date.slice(0, 4)}</p>
                                <p class="card__rating" > ${ vote_average }</p>
                            </div>
                        </div>
                    </a>
                </li>`
    }).join('');
    refs.libraryFilmList.insertAdjacentHTML('beforeend', galleryMarkup);
};


