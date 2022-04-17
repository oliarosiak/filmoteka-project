import { refs } from './refs';
import { genres } from './genres.json';

const BASE_IMG_URL = 'http://image.tmdb.org/t/p/w300';

//функція рендеру карток фільму в HOME
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
                        <img class="card__img" src="${BASE_IMG_URL}${poster_path}" alt="photo" />
                        <div class="card__information">
                            <h2 class="card__name">${title}</h2>
                            <div class="card__inf">
                            <p class="card__genre">${genreName}</p>
                            ${genreName&&release_date ? `<p class="card__genre">&nbsp;|&nbsp;</p>` : ''}
                            <p class="card__genre">${release_date.slice(0, 4)}</p>    
                            </div>
                        </div>
                    </a>
                </li>`;
    })
    .join('');
  refs.homeFilmList.insertAdjacentHTML('beforeend', galleryMarkup);
}

//функція рендеру карток фільму в MY LIBRARY

export function renderCardMurkupLibreary(data) {
  const galleryMarkupLibreary = data
    .map(({ id, poster_path, title, genres, release_date, vote_average }) => {
      return `<li class="card">
                    <a href="#${id}" class="card__link" id="${id}">
                        <img class="card__img" src="${BASE_IMG_URL}${poster_path}" alt="photo" />
                        <div class="card__information">
                            <h2 class="card__name">${title}</h2>
                            <div class="card__inf">   
                            <p class="card__genre">${genres.name}</p>
                            ${genres.name&&release_date ? `<p class="card__genre">&nbsp;|&nbsp;</p>` : ''}
                            <p class="card__genre">${release_date.slice(0, 4)}</p>                        
                            <p class="card__rating" > ${vote_average}</p>
                            </div>
                        </div>
                    </a>
                </li>`;
    })
    .join('');
  refs.homeFilmList.insertAdjacentHTML('beforeend', galleryMarkupLibreary); // змінено на refs.homeFilmList
}
