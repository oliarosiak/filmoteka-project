const boxCardModal = document.querySelector('.card-modal__container');

export function renderCardModalMurkup({
  poster_path,
  original_title,
  title,
  name,
  vote_average,
  vote_count,
  genres,
  overview,
  popularity,
  id,
}) {
  const filmGenres = genres.map(({ name }) => name).join(', ');
  return `<div class="card-modal__image-box">
        <img class="card-modal__banner" src="https://image.tmdb.org/t/p/original${poster_path}" alt="">
        <button class='btn-trailer' type='button' aria-label='play movie trailer'> 
            <svg class='btn-trailer__svg' width='68' height='48' viewBox='0 0 68 48'> 
                <path class='btn-trailer__path' 
                    d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' 
                    fill='#212121'> 
                </path> 
                <path d='M 45,24 27,14 27,34' fill='#fff'></path> 
            </svg> 
        </button>
        </div>
        <div class="card-modal__information-box">
        <h2 class="card-modal__title">${title}</h2>
        <div class="card-modal__wrapper">
            <p class="card-modal__wrapper-category">Vote / Votes</p>
            <p class="card-modal__wrapper-value">
                <span class=" card-modal__wrapper-value card-modal__wrapper-value--color">${vote_average}</span>
                <span class="card-modal__wrapper-category">/</span>
                <span class="card-modal__wrapper-value ">${vote_count}</span>
            </p>
        </div>
        <div class="card-modal__wrapper">
            <p class="card-modal__wrapper-category">popularity</p>
            <p class="card-modal__wrapper-value">${popularity}</p>
        </div>
        <div class="card-modal__wrapper">
            <p class="card-modal__wrapper-category">Original Title</p>
            <p class="card-modal__wrapper-value">${original_title}</p>
        </div>
        <div class="card-modal__wrapper">
            <p class="card-modal__wrapper-category">Genre</p>
            <p class="card-modal__wrapper-value card-modal__wrapper-value--size">${filmGenres}</p>
        </div>
        <h3 class="card-modal__about-title">About</h3>
        <p class="card-modal__about-text">${overview}</p>   
        </div>
        `;

  console.log(data.original_title);
}
