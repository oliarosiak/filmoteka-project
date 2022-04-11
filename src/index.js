import './sass/main.scss';
import API from './api/fetch';
import { refs } from './js/refs';
import { teamMarkup } from './js/team-markup';
import './js/authFirebase';

// модалка для команди

// наразі закоментував бо багато помилок в консолі
// refs.openModalTeamBtn.addEventListener('click', toggleModalTeam);
// refs.closeModalTeamBtn.addEventListener('click', toggleModalTeam);
// refs.modalTeam.addEventListener('click', removeModalTeam);

// function toggleModalTeam() {
//   refs.teamContainer.insertAdjacentHTML('beforeend', teamMarkup);
//   refs.modalTeam.classList.toggle('is-hidden');
// }

// function removeModalTeam(e) {
//   if (e.target === refs.modalTeam) {
//     refs.modalTeam.classList.add('is-hidden');
//     refs.teamContainer.innerHTML = '';
//   }
// }
