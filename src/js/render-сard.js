import { refs } from './refs';
import { genres } from './genres.json';

//функція рендеру карток фільму на сторінці HOME
export function renderCardMurkup(data) {
  const galleryMarkup = data.results
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      let genreName = genre_ids
        .slice(0, 3)
        .map(id => genres.filter(element => element.id === id))
        .flat()
        .map(element => element.name)
        .join(', ');
      return `<li class="card">
                    <a href="#${id}" class="card__link" id="${id}">
                        <img class="card__img" src="http://image.tmdb.org/t/p/w300${poster_path}" alt="photo" />
                        <div class="card__information">
                            <h2 class="card__name">${title}</h2>
                            <div class="card__inf">
                            <p class="card__genre">${genreName} | ${release_date.slice(0,4,)}</p>    
                            </div>
                        </div>
                    </a>
                </li>`;
    })
    .join('');
  refs.homeFilmList.insertAdjacentHTML('beforeend', galleryMarkup);
}

//функція рендеру карток фільму на сторінці MY LIBRARY

export function renderCardMurkupLibreary(data) {
  const galleryMarkupLibreary = data
    .map(({ id, poster_path, title, genres, release_date, vote_average }) => {
      return `<li class="card">
                    <a href="#${id}" class="card__link" id="${id}">
                        <img class="card__img" src="http://image.tmdb.org/t/p/w300${poster_path}" alt="photo" />
                        <div class="card__information">
                            <h2 class="card__name">${title}</h2>
                            <div class="card__inf">   
                            <p class="card__genre">${genres.name} | ${release_date.slice(0,4,)}</p>                         
                            <p class="card__rating" > ${vote_average}</p>
                            </div>
                        </div>
                    </a>
                </li>`;
    })
    .join('');
  refs.libraryFilmList.insertAdjacentHTML('beforeend', galleryMarkupLibreary);
}
