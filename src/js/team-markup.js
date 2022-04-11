import { teamItems } from './team-items';

export const teamMarkup = teamItems
  .map(({ image, firstName, secondName, position, github, linkedin }) => {
    return `
                <li class="team__item">
                    <img class="team__image" src="${image}" alt="${firstName} ${secondName}" width="300">
                    <div class="team__content">
                        <h3 lang="en" class="team__title">${firstName} <br>${secondName}</h3>
                        <p lang="en" class="team__desc">${position}</p>
                        <ul class="team__socials">
                            <li class="socials__item">
                                <a href="${github}" class="socials__link">
                                    <img class="socials__icon" src="https://cdn-icons.flaticon.com/png/512/3128/premium/3128308.png?token=exp=1649663560~hmac=d2b89928e15ca3508d41ee7005c2bd26" width="25" height="25">
                                </a>
                            </li>
                            <li class="socials__item">
                                <a href="${linkedin}" class="socials__link">
                                    <img class="socials__icon" src="https://cdn-icons.flaticon.com/png/512/3128/premium/3128219.png?token=exp=1649663615~hmac=b2389583f869ac8a7948edbc658541ed" width="25" height="25">
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>`;
  })
  .join(``);
