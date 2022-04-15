import { getMovies } from './fetch';
import { clearRender } from './clearRender'
import { renderCardMurkup } from './render-сard';


export let search = 'movie/popular';

const inputValue = document.querySelector('.header__form--input');

inputValue.addEventListener('input', searchMovie);

function searchMovie(e) {
    const query = e.target.value;
    clearRender();
    if (query.length === 0) {
        search = 'movie/popular';
        getMovies().then(renderCardMurkup);
    }
    search = 'search/movie'
    
    getMovies(query).then(renderCardMurkup)
}


