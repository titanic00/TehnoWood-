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