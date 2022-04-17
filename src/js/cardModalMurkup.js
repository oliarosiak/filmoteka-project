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

export function renderCardModalMurkup({ title, backdrop_path }) {
  const cardModalmurkup = `<div class="card-modal__image-box">
        <img class="card-modal__banner" src="http://image.tmdb.org/t/p/w300${backdrop_path}" alt="">
        </div>       
        <div class="card-modal__information-box">
        <h2 class="card-modal__title">${title}</h2>
        <div class="card-modal__wrapper">
            <p class="card-modal__wrapper-category">Vote / Votes</p>
            <p class="card-modal__wrapper-value">render</p>
        </div>
        <div class="card-modal__wrapper">
            <p class="card-modal__wrapper-category">popularity</p>
            <p class="card-modal__wrapper-value">render</p>
        </div>
        <div class="card-modal__wrapper">
            <p class="card-modal__wrapper-category">Original Title</p>
            <p class="card-modal__wrapper-value">render</p>
        </div>
        <div class="card-modal__wrapper">
            <p class="card-modal__wrapper-category">Genre</p>
            <p class="card-modal__wrapper-value card-modal__wrapper-value--size">render</p>
        </div>
        <h3 class="card-modal__about-title">About</h3>
        <p class="card-modal__about-text">render</p>     
        </div>`;
  boxCardModal.insertAdjacentHTML('beforeend', cardModalmurkup);
  console.log(data.original_title);
}
