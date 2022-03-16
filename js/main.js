import { HOTELS_COUNT } from './const.js';
import { createHotel } from './data.js';
import { createPopup } from './utils/popup.js';

// Создание массива с отелями
const hotels = new Array(HOTELS_COUNT).fill().map(createHotel);

//Заглушка для линтера
const addHotels = () => { };
addHotels(hotels);

//Заглушка для линтера
hotels.forEach((hotel) => {
  createPopup(hotel);
});
