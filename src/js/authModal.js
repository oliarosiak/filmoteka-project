import { refs } from './refs';
import { onKeyPress, onBackdropClick } from './closeModal.js';

//----------- SIGN IN

// відкриття модалки
refs.openSignInForm.addEventListener('click', showHideSignInModel);

function showHideSignInModel() {
  refs.signInForm.classList.toggle('is-hidden');
  
  };

// закриття модалки по кліку на кнопку закриття, по кліку на бекдроп
refs.signInModal__closebtn.addEventListener('click', onCloseSignInAuthModal);
refs.signInForm.addEventListener("click", onCloseSignInAuthModal);

function onCloseSignInAuthModal (e) {
  if (e.target === refs.signInForm ||
    e.currentTarget === refs.signInModal__closebtn ||
    e.code === 'Escape') {
      refs.signInForm.classList.toggle('is-hidden');
  }
}

//----------- SIGN UP
// відкриття модалки
refs.openRegisterForm.addEventListener('click', showHideRegisterModal);

function showHideRegisterModal() {
  refs.registerForm.classList.toggle('is-hidden');
  };
// закриття модалки по кліку на кнопку закриття, по кліку на бекдроп
refs.registerModal__closebtn.addEventListener('click', onCloseSignUpAuthModal);
refs.registerForm.addEventListener("click",onCloseSignUpAuthModal);

function onCloseSignUpAuthModal(e) {
  if (e.target === refs.registerForm ||
    e.currentTarget === refs.registerModal__closebtn ||
    e.code === 'Escape') {
      refs.registerForm.classList.toggle('is-hidden');
  }
}
