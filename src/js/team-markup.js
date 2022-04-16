import { teamItems } from './team-items';

export const teamMarkup = teamItems
  .map(({ image, firstName, secondName, position, github, linkedin }) => {
    return `
                <li class="team__item">
                    <img class="team__image" src="${image}" alt="${firstName} ${secondName}" width="300" loading="lazy">
                    <div class="team__content">
                        <h3 lang="en" class="team__title">${firstName} <br>${secondName}</h3>
                        <p lang="en" class="team__desc">${position}</p>
                        <ul class="team__socials">
                            <li class="socials__item">
                                <a href="${github}" class="socials__link">
                                    <img class="socials__icon" src="https://raw.githubusercontent.com/oliarosiak/filmoteka-project/main/src/images/team/icon-github.png" width="25" height="25">
                                </a>
                            </li>
                            <li class="socials__item">
                                <a href="${linkedin}" class="socials__link">
                                    <img class="socials__icon" src="https://raw.githubusercontent.com/oliarosiak/filmoteka-project/main/src/images/team/icon-linkedin.png" width="25" height="25">
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>`;
  })
  .join(``);
