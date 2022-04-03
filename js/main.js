import { HOTELS_COUNT } from './const.js';
import { createHotel } from './data.js';
import { initFormValidate } from './utils/work-with-form.js';
import {
  setActive,
  setDisabled
} from './utils/page-mode.js';
import { createMap } from './utils/create-map.js';

setDisabled();
setActive();

// Создание массива с отелями
const hotels = new Array(HOTELS_COUNT).fill().map((item, index) => createHotel(index));

document.addEventListener('DOMContentLoaded', () => {
  createMap(hotels);
  initFormValidate();
});
