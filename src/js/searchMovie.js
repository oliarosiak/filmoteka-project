import debounce from 'lodash.debounce';
import { fetchSearchMovie } from './fetch';
import { renderCardMurkup } from './render-сard';
import { pagination } from './pagination';
import { clearRender } from './clearRender';

export let filmName = '';

const DEBOUNCE_DELAY = 610;
const inputValue = document.querySelector('.header__form--input');
const container = document.getElementById('pagination');

inputValue.addEventListener('input', debounce(searchMovie, DEBOUNCE_DELAY));

export function searchMovie(e) {
  filmName = e.target.value;
  if (filmName.length > 0) {
    fetchSearchMovie(filmName).then(data => {
      data.total_results <= 20
        ? container.classList.add('is-hidden')
        : container.classList.remove('is-hidden');
      pagination.reset(data.total_results);
      renderCardMurkup(data);
      pagination.on('beforeMove', event => {
        const currentPage = event.page;
        fetchSearchMovie(currentPage).then(data => {
          clearRender();
          renderCardMurkup(data);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        });
      });
    });
  }
}
