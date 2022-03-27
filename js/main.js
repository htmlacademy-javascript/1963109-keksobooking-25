import { HOTELS_COUNT } from './const.js';
import { createHotel } from './data.js';
import { createPopup } from './create-popup.js';
import { initFormValidate } from './utils/work-with-form.js';

import {
  setActive,
  setDisabled
} from './utils/page-mode.js';

//Заглушка для линтера
setDisabled();
setActive();

// Создание массива с отелями
const hotels = new Array(HOTELS_COUNT).fill().map((item, index) => createHotel(index));

//Заглушка для линтера
const addHotels = () => { };
addHotels(hotels);

//Заглушка для линтера
hotels.forEach((hotel) => {
  createPopup(hotel);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#map-canvas').append(createPopup(hotels[0]));
  initFormValidate();
});

