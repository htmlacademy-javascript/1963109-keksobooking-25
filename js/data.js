import { BUILDINGS, CHECK_TIME, FACILITIES, LAT_END, LAT_START, LNG_END, LNG_START, OFFER_MAX_GUESTS, OFFER_MAX_PRICE, OFFER_MAX_ROOMS, OFFER_MIN_GUESTS, OFFER_MIN_PRICE, OFFER_MIN_ROOMS, PHOTO_EXAMPLES, TYPE_OF_ROOM } from './const.js';
import { shuffleArr } from './utils/shuffle-arr.js';
import { growArr } from './utils/grow-arr.js';
import { returnRandomDiceNum } from './utils/return-random-dice-num.js';
import { returnRandomNumber } from './utils/return-random-num.js';
import { checkNumeral } from './utils/check-numeral.js';

//функция для создания обьекта
export const createHotel = (count) => {

  // обьект местоположения
  const location = {
    lat: returnRandomNumber(LAT_START, LAT_END, 5),
    lng: returnRandomNumber(LNG_START, LNG_END, 5)
  };

  // *****Элементы итогового объекта*****
  const author = {
    avatar: `img/avatars/user${checkNumeral(count)}.png`,
  };

  const offer = {
    title: `Отель ${count + 1}`,
    address: `${location.lat} , ${location.lng}`,
    price: returnRandomDiceNum(OFFER_MIN_PRICE, OFFER_MAX_PRICE),
    type: BUILDINGS[returnRandomDiceNum(0, BUILDINGS.length - 1)],
    rooms: returnRandomDiceNum(OFFER_MIN_ROOMS, OFFER_MAX_ROOMS),
    guests: returnRandomDiceNum(OFFER_MIN_GUESTS, OFFER_MAX_GUESTS),
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
