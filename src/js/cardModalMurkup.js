// ` <div class="card-modal__image-box">
// <img class="card-modal__banner" src="images/team/default.jpg" alt="">
// </div>
// <div class="card-modal__information-box">
// <h2 class="card-modal__title">render</h2>
// <div class="card-modal__wrapper">
//     <p class="card-modal__wrapper-category">Vote / Votes</p>
//     <p class="card-modal__wrapper-value">render</p>
// </div>
// <div class="card-modal__wrapper">
//     <p class="card-modal__wrapper-category">popularity</p>
//     <p class="card-modal__wrapper-value">render</p>
// </div>
// <div class="card-modal__wrapper">
//     <p class="card-modal__wrapper-category">Original Title</p>
//     <p class="card-modal__wrapper-value">render</p>
// </div>
// <div class="card-modal__wrapper">
//     <p class="card-modal__wrapper-category">Genre</p>
//     <p class="card-modal__wrapper-value card-modal__wrapper-value--size">render</p>
// </div>
// <h3 class="card-modal__about-title">About</h3>
// <p class="card-modal__about-text">render</p>
// <div class="card-modal__button-box">
//     <button type="button" class="card-modal__button-add-watched ">add to watched</button>
//     <button type="button" class="card-modal__button-add-queue">add to queue</button>
// </div>
// </div>`

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
    id, }) {
        const filmGenres = genres.map(({ name }) => name).join(', ');
        return `<div class="card-modal__image-box">
        <img class="card-modal__banner" src="https://image.tmdb.org/t/p/original${poster_path}" alt="">
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
        <div class="card-modal__button-box">
                            <button type="button" class="card-modal__button-add card-modal__button-add--size ">add to watched</button>
                            <button type="button" class="card-modal__button-add">add to queue</button>
                            <!-- <button type="button" class="modal-film__play-btn">Play</button> -->
                        </div>    
        </div>
        `;
  
  console.log(data.original_title);
}
