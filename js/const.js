const HOTELS_COUNT = 10;
const LAT_START = 35.65;
const LAT_END = 35.7;
const LNG_START = 139.7;
const LNG_END = 139.8;
const BUILDINGS = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_TIME = ['12:00', '13:00', '14:00'];
const TYPE_OF_ROOM = ['standart', 'comfort', 'luxe', 'president'];
const FACILITIES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTO_EXAMPLES = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const MAX_GUESTS = 100;
const MAIN_MARKER_PATH = './img/main-pin.svg';
const MARKER_PATH = './img/pin.svg';
const HOTEL_MIN_PRICE = 3000;
const BUNGALOW_MIN_PRICE = 0;
const FLAT_MIN_PRICE = 1000;
const HOUSE_MIN_PRICE = 5000;
const PALACE_MIN_PRICE = 10000;
const DEFAULT_COORDINATES = {
  defaultLat: 35.68950,
  defaultLng: 139.69171,
}; // Адрес по умолчанию

export { HOTELS_COUNT, BUNGALOW_MIN_PRICE, HOUSE_MIN_PRICE, FLAT_MIN_PRICE, PALACE_MIN_PRICE, HOTEL_MIN_PRICE, MAIN_MARKER_PATH, MARKER_PATH, DEFAULT_COORDINATES, LAT_START, LAT_END, LNG_START, LNG_END, BUILDINGS, CHECK_TIME, TYPE_OF_ROOM, FACILITIES, PHOTO_EXAMPLES, MAX_GUESTS };
