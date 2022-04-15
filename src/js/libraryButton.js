const refs = {
    queue: document.querySelector('#queue'),
    watched: document.querySelector('#watched'),
    home: document.querySelector('#home'),
    library: document.querySelector('#library'),
    input: document.querySelector('#input'),
    buttonLibrary: document.querySelector('.but__container'),
    background: document.querySelector('#background'),
    headerScroll: document.querySelector('.scroll'),
    progressContainer: document.querySelector('.progress-container')
};


refs.queue.addEventListener('click', clickButQueue);
refs.watched.addEventListener('click', clickButWatched);
refs.home.addEventListener('click', clickButHome);
refs.library.addEventListener('click', clickButLibrary);

function clickButHome (){
    refs.home.classList.toggle('current')
    refs.library.classList.toggle('current')
    refs.buttonLibrary.classList.toggle('visually-hidden')
refs.input.classList.toggle('visually-hidden')
refs.background.classList.toggle('header')
refs.background.classList.toggle('library')
}

function clickButLibrary (){
    refs.library.classList.toggle('current')
    refs.home.classList.toggle('current')
    refs.input.classList.toggle('visually-hidden')
    refs.buttonLibrary.classList.toggle('visually-hidden')
refs.background.classList.toggle('library')
refs.background.classList.toggle('header')

}

function clickButQueue (){
    refs.queue.classList.toggle('library__current')
    refs.watched.classList.toggle('library__current')
};

function clickButWatched (){
    refs.watched.classList.toggle('library__current')
    refs.queue.classList.toggle('library__current')
};


window.onscroll = function() {startBar()};

function startBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
