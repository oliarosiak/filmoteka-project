import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../sass/layout/_pagination.scss';
import { getMovies } from './fetch';
// import { renderGalery } from './galery';

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

export function fetch() {
  getMovies(page).then(data => {
    pagination.reset(data.total_results);
    // renderGalery(data);
  });
}

fetch();

export function paginationOn() {
  pagination.on('afterMove', event => {
    const currentPage = event.page;
    getMovies(currentPage).then(data => {
      // renderGalery(data);
      window.scrollTo({
        top: 250,
        left: 0,
        behavior: 'smooth',
      });
    });
  });
}

paginationOn();
