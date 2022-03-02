import { growArr, shuffleArr } from './utils/changeArr.js';
import { returnRandomDiceNum } from './utils/return-random-dice-num.js';
import { returnRandomNumber } from './utils/return-random-num.js';


//функция для создания обьекта

const createHotel = (count) => {
  const LAT_START = 35.65;
  const LAT_END = 35.7;
  const LNG_START = 139.7;
  const LNG_END = 139.8;

  // обьект местоположения
  const location = {
    lat: returnRandomNumber(LAT_START, LAT_END, 5),
    lng: returnRandomNumber(LNG_START, LNG_END, 5)
  };

  // создание массивов с данными для обьектов
  const BUILDINGS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const CHECK_TIME = ['12:00', '13:00', '14:00'];
  const TYPE_OF_ROOM = ['standart', 'comfort', 'luxe', 'president'];
  const FACILITIES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  const PHOTO_EXAMPLES = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
  ];

  // *****Элементы итогового объекта*****
  const author = {
    avatar: `img/avatars/user${count}.png`
  };

  const offer = {
    title: `Отель ${count + 1}`,
    address: `${location.lat} , ${location.lng}`,
    price: returnRandomDiceNum(1000, 1000000),
    type: BUILDINGS[returnRandomDiceNum(0, BUILDINGS.length - 1)],
    rooms: returnRandomDiceNum(1, 10),
    guests: returnRandomDiceNum(1, 10),
    checkin: CHECK_TIME[returnRandomDiceNum(0, CHECK_TIME.length - 1)],
    ckeckout: CHECK_TIME[returnRandomDiceNum(0, CHECK_TIME.length - 1)],
    features: shuffleArr(FACILITIES),
    description: TYPE_OF_ROOM[returnRandomDiceNum(0, TYPE_OF_ROOM.length - 1)],
    photos: growArr(PHOTO_EXAMPLES),
  };

  return {
    author,
    offer,
    location
  };
};

// Создание массива с отелями
const HOTELS_COUNT = 10;
const hotels = new Array(HOTELS_COUNT).fill().map(createHotel);

// заглушка для линтера
const addHotels = () => {};
addHotels(hotels);
