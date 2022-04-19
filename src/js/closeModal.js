export function onKeyPress(e) {
  if (e.code === 'Escape') {
    onBtnCloseModalClick();
  }
}

// Close modal card background
export function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onBtnCloseModalClick();
  }
}
