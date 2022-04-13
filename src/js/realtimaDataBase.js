import { refs } from './refs';
import { app } from './authFirebase';
import { getDatabase, ref, set, onValue } from 'firebase/database';
const database = getDatabase(app);

// const filmList = document.querySelector('.film-list');
// const libraryList = document.querySelector('.film-library');

// filmList.addEventListener('click', e => {
//   if (!e.target.closest('.card__link')) {
//     return;
//   }
//   console.log('клік по карточці');
// });

const currentUser = JSON.parse(localStorage.getItem('UserUID'));
console.log(currentUser);
