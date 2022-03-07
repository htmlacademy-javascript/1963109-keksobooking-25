import { HOTELS_COUNT } from './const.js';
import { createHotel } from './data.js';

// Создание массива с отелями
const hotels = new Array(HOTELS_COUNT).fill().map(createHotel);

//Заглушка для линтера
const addHotels = () => { };
addHotels(hotels);
