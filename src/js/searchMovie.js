import debounce from 'lodash.debounce';
import { getMovies } from './fetch';
import { clearRender } from './clearRender';
import { renderCardMurkup } from './render-сard';
import { pagination } from './pagination';

export let search = 'trending/movie/day';
export let query = '';
export let filmName = '';

const DEBOUNCE_DELAY = 300;
const inputValue = document.querySelector('.header__form--input');
const container = document.getElementById('pagination');

inputValue.addEventListener('input', debounce(searchMovie, DEBOUNCE_DELAY));

export function searchMovie(e) {
  filmName = e.target.value;
  if (filmName.length > 0) {
    clearRender();
    search = 'search/movie';
    query = '&query=';
    getMovies(filmName).then(data => {
      data.total_results <= 20
        ? container.classList.add('is-hidden')
        : container.classList.remove('is-hidden');
      pagination.reset(data.total_results);
      renderCardMurkup(data);
    });
  }
}
