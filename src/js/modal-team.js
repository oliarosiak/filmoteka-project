import { refs } from './refs';
import { teamMarkup } from './team-markup';

refs.openModalTeamBtn.addEventListener('click', openModalTeam);

function openModalTeam() {
  refs.teamContainer.insertAdjacentHTML('beforeend', teamMarkup);
  refs.modalTeam.classList.remove('is-hidden');

  refs.closeModalTeamBtn.addEventListener('click', removeModalTeam);
  refs.modalTeam.addEventListener('click', removeModalTeam);
  window.addEventListener(`keydown`, removeModalTeam);
}

function removeModalTeam(e) {
  if (
    e.target === refs.modalTeam ||
    e.currentTarget === refs.closeModalTeamBtn ||
    e.code === 'Escape'
  ) {
    refs.modalTeam.classList.add('is-hidden');
    refs.teamContainer.innerHTML = '';

    refs.closeModalTeamBtn.removeEventListener('click', removeModalTeam);
    refs.modalTeam.removeEventListener('click', removeModalTeam);
    window.removeEventListener('keydown', removeModalTeam);
  }
}
