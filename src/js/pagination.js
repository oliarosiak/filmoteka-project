import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '../sass/_pagination.scss';
import { getMovies } from '../api/fetch';
// // import { renderGalery } from './galery';

// const container = document.getElementById('tui-pagination-container');

// const pagination = new Pagination(container, {
//   totalItems: 0,
//   itemsPerPage: 20,
//   visiblePages: 5,
//   page: 1,
//   centerAlign: true,
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// });

// const page = pagination.getCurrentPage();

// export function fetch() {
//   getMovies(page).then(data => {
//     pagination.reset(data.total_results);
//     renderGalery(data);
//   });
// }

// fetch();

// export function paginationOn() {
//   pagination.on('afterMove', event => {
//     const currentPage = event.page;
//     getMovies(currentPage).then(data => {
//       renderGalery(data);
//       window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth',
//       });
//     });
//   });
// }

// paginationOn();

// export { pagination };

const container = document.getElementById('pagination');

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 10,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination('pagination', options);

const page = pagination.getCurrentPage();

// export function fetch() {
//   getMovies(page).then(data => {
//     pagination.reset(data.total_results);
//     renderGalery(data); //-----------------------------------------------------
//   });
// }

// fetch();

// pagination.on('beforeMove', evt => {
//   const { page } = evt;
//   const result = getMovies({ page });

//   if (result) {
//     pagination.movePageTo(page);
//   } else {
//     return false;
//   }
// });

export function paginationOn() {
  pagination.on('afterMove', event => {
    const currentPage = event.page;
    console.log(data);
    getMovies(currentPage).then(data => {
      renderGalery(data); //----------------------------------------------
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  });
}

paginationOn();

pagination.on('afterMove', ({ page }) => console.log(page));
