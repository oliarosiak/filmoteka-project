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
import { getFirestore, getDoc, doc, setDoc, collection, data, addDoc } from 'firebase/firestore';
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
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
const db = getFirestore(app);
const curUser = JSON.parse(localStorage.getItem('User'));
const addToWatchedBtn = document.querySelector('.card-modal__button-add-watched');

const arrFilm = [];
//функції для Firestore

async function setData(userId, array) {
  await setDoc(doc(db, 'users', userId), { filmId: array });
}

document.addEventListener('click', e => {
  const curLink = e.target.closest('.card__link');
  if (!curLink) {
    return;
  }
  const curFilm = curLink.id;
  console.log(curFilm);

  addToWatchedBtn.addEventListener('click', e => {
    arrFilm.push(curFilm);
    setData(curUser, arrFilm);
  });
});

async function getData(userId) {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data());
  return docSnap.data();
}

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
    .then(() => {
      refs.registerForm.classList.toggle('is-hidden');
      Report.success(`Успішно зареєстрований`, `Гарного перегляду ${userEmail}`, `Ok`);
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
      getData(curUser);
    })
    .catch(error => Report.failure(`Помилка`, ` ${error.message}`, `Ok`));
}

function onFormSignOut(e) {
  signOut(auth)
    .then(() => {
      Notify.info(`До побачення`);
      hideBtnAuth();
    })
    .catch(error => {
      Notify.failure(`${error.message}`);
    });
}

// detect auth state
onAuthStateChanged(auth, user => {
  if (user !== null) {
    // console.log(user.email);
    localStorage.setItem('User', JSON.stringify(user.uid));
    hideBtnAuth();
  } else {
    localStorage.setItem('User', JSON.stringify('noUser'));
  }
});
