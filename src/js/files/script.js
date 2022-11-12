// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//========================================================================================================================================================

// creating yandex map

ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map-footer', {
        center: [56.158230, 44.201316],
        zoom: 10
    });
}

//========================================================================================================================================================

const admitBody = document.querySelector('.label-form-admit_body');
const admitFooter = document.querySelector('.label-form-admit_footer');

admitBody.addEventListener("click", () => {
    admitBody.classList.toggle('label-form-admit_admitted');
});
document.querySelector('.label-form-admit_body input').addEventListener('click', (ev) => {
    ev.stopPropagation();
});

admitFooter.addEventListener("click", () => {
    admitFooter.classList.toggle('label-form-admit_admitted');
});
document.querySelector('.label-form-admit_footer input').addEventListener('click', (ev) => {
    ev.stopPropagation();
});