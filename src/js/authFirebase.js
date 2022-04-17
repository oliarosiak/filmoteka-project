import { refs } from './refs';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFilmById } from './fetch';
import { getFirestore, updateDoc, arrayUnion, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firebaseConfig = {
  apiKey: 'AIzaSyDyDgzI_bPeljmgMmOE_ydsk6-uC9s-z44',
  authDomain: 'filmoteka-418dc.firebaseapp.com',
  databaseURL: 'https://filmoteka-418dc-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-418dc',
  storageBucket: 'filmoteka-418dc.appspot.com',
  messagingSenderId: '844992729026',
  appId: '1:844992729026:web:d52e8c884494acc227d05b',
  measurementId: 'G-XX5M9G1BCJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

refs.registerForm.addEventListener('submit', onFormSignUp);
refs.signInForm.addEventListener('submit', onFormSignIn);
refs.signOutBtn.addEventListener('click', onFormSignOut);

function hideBtnAuth() {
  refs.signOutBtn.classList.toggle('visually-hidden');
  refs.openRegisterForm.classList.toggle('visually-hidden');
  refs.openSignInForm.classList.toggle('visually-hidden');
}

function onFormSignUp(e) {
  e.preventDefault();
  const userEmail = e.target.registerEmail.value;
  const userPassword = e.target.registerPassword.value;
  createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then(e => {
      refs.registerForm.classList.toggle('is-hidden');
      Report.success(`Успішно зареєстрований`, `Гарного перегляду ${userEmail}`, `Ok`);
      setDoc(doc(db, 'users', e.user.uid), { watched: [], queue: [] });
    })
    .catch(error => {
      Report.failure(`Помилка`, ` ${error.message}`, `Ok`);
    });
}

function onFormSignIn(e) {
  e.preventDefault();
  const userEmail = e.target.signInEmail.value;
  const userPassword = e.target.signInPassword.value;
  signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then(e => {
      Notify.success(`Привіт ${userEmail}`);
      refs.signInForm.classList.toggle('is-hidden');
    })
    .catch(error => Report.failure(`Помилка`, ` ${error.message}`, `Ok`));
}

function onFormSignOut() {
  location.reload();
  signOut(auth)
    .then(() => {
      Notify.info(`До побачення`);
      hideBtnAuth();
    })
    .catch(error => {
      Notify.failure(`${error.message}`);
    });
}
// добавляємо фільми у базу firebase
function updateData(userId) {
  document.addEventListener('click', e => {
    const curLink = e.target.closest('.card__link');
    if (!curLink) {
      return;
    }
    const curFilm = curLink.id;
    // додаємо в queue
    refs.addToQueueBtn.addEventListener('click', () => {
      getFilmById(curFilm).then(dataFilm => {
        updateDoc(doc(db, 'users', userId), {
          queue: arrayUnion(dataFilm),
        });
      });
    });
    // додаємо в watched
    refs.addToWatchedBtn.addEventListener('click', () => {
      getFilmById(curFilm).then(dataFilm => {
        updateDoc(doc(db, 'users', userId), {
          watched: arrayUnion(dataFilm),
        });
      });
    });
  });
}
function getFilmWatched(userId) {
  onSnapshot(doc(db, 'users', userId), doc => {
    const watchedArr = doc.data().watched;
    localStorage.setItem('UserFilmWatched', JSON.stringify(watchedArr));
  });
}

export function getFilmQueue(userId) {
  onSnapshot(doc(db, 'users', userId), doc => {
    const queuedArr = doc.data().queue;
    localStorage.setItem('UserFilmQueue', JSON.stringify(queuedArr));
  });
}

// detect auth state
onAuthStateChanged(auth, user => {
  if (user !== null) {
    const userId = user.uid;
    localStorage.setItem('User', JSON.stringify(userId));
    hideBtnAuth();
    getFilmWatched(userId);
    getFilmQueue(userId);
    updateData(userId);
    refs.library.classList.remove('disabled');
  } else {
    localStorage.setItem('User', JSON.stringify('noUser'));
    localStorage.setItem('UserFilmWatched', JSON.stringify('[]'));
    localStorage.setItem('UserFilmQueue', JSON.stringify('[]'));
  }
});
