import debounce from 'lodash.debounce';
import { getMovies } from './fetch';
import { clearRender } from './clearRender'
import { renderCardMurkup } from './render-сard';


export let search = 'trending/movie/day';
export let query = '';
export let filmName = '';

const DEBOUNCE_DELAY = 300;
const inputValue = document.querySelector('.header__form--input');

inputValue.addEventListener('input', debounce(searchMovie, DEBOUNCE_DELAY) );

export function searchMovie(e) {
    filmName = e.target.value;
    clearRender();
    if (filmName.length === 0) {
        search = 'movie/popular';
        getMovies().then(renderCardMurkup);
    }
    search = 'search/movie'
    query = '&query='
    
    getMovies(filmName).then(renderCardMurkup)
}