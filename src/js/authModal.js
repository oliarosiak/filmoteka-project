import { refs } from './refs';
import { onKeyPress, onBackdropClick } from './closeModal.js';
refs.openRegisterForm.addEventListener('click', () => {
  refs.registerForm.classList.toggle('is-hidden');
});
refs.registerModal__closebtn.addEventListener('click', () => {
  refs.registerForm.classList.toggle('is-hidden');
});
refs.openSignInForm.addEventListener('click', () => {
  refs.signInForm.classList.toggle('is-hidden');
});
refs.signInModal__closebtn.addEventListener('click', () => {
  refs.signInForm.classList.toggle('is-hidden');
});
