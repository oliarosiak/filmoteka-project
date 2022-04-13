// import { refs } from './refs';
// import { app } from './authFirebase';
// import { getDatabase, ref, set, onValue } from 'firebase/database';
// import { getFilmById } from './fetch';
// import { renderCardMurkupLibreary } from './render-сard';
// import { getFirestore, getDoc, doc, setDoc, collection, data, addDoc } from 'firebase/firestore';

// const addToWatchedBtn = document.querySelector('.card-modal__button-add-watched');
// const db = getFirestore(app);
// export const curUser = JSON.parse(localStorage.getItem('User'));

// console.log(curUser);
// // запис фільмі
// async function setData() {
//   await setDoc(doc(db, 'user', 'LA'));
// }
// export async function getData(userId) {
//   const docRef = doc(db, 'users', userId);
//   const docSnap = await getDoc(docRef);
//   console.log(docSnap.data());
//   return docSnap.data();
// }

// document.addEventListener('click', e => {
//   const curLink = e.target.closest('.card__link');
//   if (!curLink) {
//     return;
//   }
//   addToWatchedBtn.addEventListener('click', e => {
//     console.log('add to watch');
//   });
//   const curFilm = curLink.id;
//   getFilmById(curFilm)
//     .then(data => {
//       //   робиш рендер
//       console.log(data);
//     })
//     .catch(e => {
//       console.log(e);
//     });
// });
