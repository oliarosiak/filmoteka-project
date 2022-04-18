import { clearRender } from './clearRender';

let alert = document.querySelector('.header__alert')

export function alertMessage(data) {
        if (data.total_results > 0) {
            onFetchOk()
            clearRender();
    }
    if (data.total_results < 1) {
        onFetchError()
    }
}

export function onFetchError() {
    alert.classList.remove('visually-hidden')
}

export function onFetchOk() {
    alert.classList.add('visually-hidden')
}
