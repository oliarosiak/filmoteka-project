import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../sass/layout/_pagination.scss';
import { getMovies } from './fetch';
import { renderCardMurkup } from './render-сard';

const container = document.getElementById('pagination');

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
};

const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();

function fetch() {
  getMovies(page).then(data => {
    pagination.reset(data.total_results);
    renderCardMurkup(data);
  });
}

fetch();

function paginationOn() {
  pagination.on('afterMove', event => {
    const currentPage = event.page;
    getMovies(currentPage).then(data => {
      renderCardMurkup(data);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  });
}

paginationOn();
