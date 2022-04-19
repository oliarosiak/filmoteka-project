import { refs } from './refs';
import { onKeyPress, onBackdropClick } from './closeModal.js';

function showHideSignInModel() {
  refs.signInForm.classList.toggle('is-hidden');
}
function showHideRegisterModal() {
  refs.registerForm.classList.toggle('is-hidden');
}
function clickBackdrop(e) {
  if (e.target === e.currentTarget) {
    showHideRegisterModal();
  }
  refs.registerForm.removeEventListener('click', clickBackdrop);
}
function clickEsc(e) {
  if (e.code === 'Escape') {
    showHideRegisterModal();
  }
  refs.registerForm.removeEventListener('keydown', clickEsc);
}
function clickBtn() {
  showHideRegisterModal();
  refs.registerModal__closebtn.removeEventListener('click', clickBtn);
}

refs.openRegisterForm.addEventListener('click', () => {
  showHideRegisterModal();
  refs.registerForm.addEventListener('click', clickBackdrop);
  refs.registerModal__closebtn.addEventListener('click', clickBtn);
  refs.registerForm.addEventListener('keydown', clickEsc);
});

refs.openSignInForm.addEventListener('click', () => {
  showHideSignInModel();
});
