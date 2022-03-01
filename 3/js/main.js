import { growArr, shuffleArr } from './utils/changeArr.js';
import { returnRandomDiceNum } from './utils/return-random-dice-num.js';
import { returnRandomNumber } from './utils/return-random-num.js';


//функция для создания обьекта

const createHotel = (count) => {

  // обьект местоположения
  const location = {
    lat: returnRandomNumber(35.65, 35.7, 5),
    lng: returnRandomNumber(139.7, 139.8, 5)
  };

  // создание массивов с данными для обьектов
  const BUILDINGS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
  const CHECK_TIME = ['12:00', '13:00', '14:00'];
  const TYPEOFROOM = ['standart', 'comfort', 'luxe', 'president'];
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
    description: TYPEOFROOM[returnRandomDiceNum(0, TYPEOFROOM.length - 1)],
    photos: growArr(PHOTO_EXAMPLES),
  };

  const hotel = {
    author,
    offer
  };

  return hotel; // Вывод объекта в консоль
};

// Генерация отелей
for (let i = 0; i < 10; i++) {
  /*eslint-disable */
  console.log(createHotel(i));
}
