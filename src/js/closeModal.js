export function onKeyPress(e) {
  console.log(e.code);
  if (e.code === 'Escape') onBtnCloseModalClick();
}

// Close modal card background
export function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onBtnCloseModalClick();
  }
}

// Removes the event listener from the item
function onBtnCloseModalClick() {
  backdropCardModal.classList.add('is-hidden');
  window.removeEventListener('keydown', onKeyPress);
}
