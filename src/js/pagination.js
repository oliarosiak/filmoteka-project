import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../sass/layout/_pagination.scss';
import { getMovies } from './fetch';
import { clearRender } from './clearRender';
import { renderCardMurkup } from './render-сard';

const container = document.getElementById('pagination');

export const pagination = new Pagination(container, {
  itemsPerPage: 20,
  visiblePages: 5,
});

const page = pagination.getCurrentPage();

getMovies(page).then(data => {
  pagination.reset(data.total_results);
  renderCardMurkup(data);
});

pagination.on('beforeMove', event => {
  const currentPage = event.page;
  getMovies(currentPage).then(data => {
    clearRender();
    renderCardMurkup(data);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
});
