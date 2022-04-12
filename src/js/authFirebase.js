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
import { getDatabase } from 'firebase/database';
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
const database = getDatabase(app);

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
      hideBtnAuth();
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
    .then(() => {
      Notify.success(`Привіт ${userEmail}`);
      hideBtnAuth();
      refs.signInForm.classList.toggle('is-hidden');
    })
    .catch(error => Report.failure(`Помилка`, ` ${error.message}`, `Ok`));
}

function onFormSignOut(e) {
  signOut(auth)
    .then(() => {
      alert(`До побачення`);
      hideBtnAuth();
    })
    .catch(error => {
      Notify.failure(`${error.message}`);
    });
}

// detect auth state
onAuthStateChanged(auth, user => {
  if (user !== null) {
    localStorage.setItem('UserUID', JSON.stringify(user.uid));
  } else {
    localStorage.setItem('UserUID', JSON.stringify('noUser'));
  }
});
