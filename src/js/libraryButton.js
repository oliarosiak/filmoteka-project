const refs = {
    queue: document.querySelector('#queue'),
    watched: document.querySelector('#watched'),
    home: document.querySelector('#home'),
    library: document.querySelector('#library'),
    input: document.querySelector('#input'),
    buttonLibrary: document.querySelector('.but__container'),
    background: document.querySelector('#background')
};


refs.queue.addEventListener('click', clickButQueue);
refs.watched.addEventListener('click', clickButWatched);
refs.home.addEventListener('click', clickButHome);
refs.library.addEventListener('click', clickButLibrary);

function clickButHome (){
    refs.home.classList.add('current')
    refs.library.classList.remove('current')
    refs.buttonLibrary.classList.add('jsNone')
refs.input.classList.remove('jsNone')
refs.background.classList.add('header')
refs.background.classList.remove('library')
}

function clickButLibrary (){
    refs.library.classList.add('current')
    refs.home.classList.remove('current')
    refs.input.classList.add('jsNone')
    refs.buttonLibrary.classList.remove('jsNone')
refs.background.classList.add('library')
refs.background.classList.remove('header')

}

function clickButQueue (){
    refs.queue.classList.add('library__current')
    refs.watched.classList.remove('library__current')


};

function clickButWatched (){
    refs.watched.classList.add('library__current')
    refs.queue.classList.remove('library__current')
};