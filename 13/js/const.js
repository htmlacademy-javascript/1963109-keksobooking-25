const GET_LINK = 'https://25.javascript.pages.academy/keksobooking/data';
const POST_LINK = 'https://25.javascript.pages.academy/keksobooking';
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
const MAX_GUESTS = '100';
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
};
// Адрес по умолчанию
const MAIN_MARKER_SIZE = [52, 52];
const MARKER_SIZE = [40, 40];
const OFFER_MIN_PRICE = 1000;
const OFFER_MAX_PRICE = 1000000;
const OFFER_MIN_ROOMS = 1;
const OFFER_MAX_ROOMS = 10;
const OFFER_MIN_GUESTS = 1;
const OFFER_MAX_GUESTS = 10;

// const AD_FORM = document.querySelector('.ad-form');
// const AD_FORM_SUBMIT = document.querySelector('.ad-form__submit');
// const USER_FORM_RESET = document.querySelector('.ad-form__reset');
// const AVATAR = document.querySelector('#avatar');
// const TITLE = document.querySelector('#title');
// const IMAGES = document.querySelector('#images');
// const APPARTMENTS_TYPE = document.querySelector('#type');
// const APPARTMENTS_OPTIONS = [...APPARTMENTS_TYPE];
// const APPARTMENTS_PRICE = document.querySelector('#price');
// const CAPACITY = document.querySelector('#capacity');
// const GUESTS = [...CAPACITY.children];
// const ROOM_NUMBER = document.querySelector('#room_number');
// const COUNT_ROOMS = [...ROOM_NUMBER.children];
// const TIMEIN = document.querySelector('#timein');
// const TIMEIN_ARR = [...TIMEIN];
// const TIMEOUT = document.querySelector('#timeout');
// const TIMEOUT_ARR = [...TIMEOUT];
// const FEATURES = document.querySelectorAll('.features__checkbox');
// const DESCRIPTION = document.querySelector('#description');
const MARKERS_COUNT = 10;
const DELAY = 500;
const TITLE_LAYER_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const TITLE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// const ERROR_DOWNLOAD_MESSAGE = document.querySelector('#error-downloading').content;
// const ERROR_POST_MESSAGE = document.querySelector('#error').content;
// const SUCCESS_POST_MESSAGE = document.querySelector('#success').content;
// const MESSAGE_WRAPPER = document.querySelector('body');

export {
  TITLE_LAYER_URL, TITLE_LAYER_ATTRIBUTION, DELAY, MARKERS_COUNT, POST_LINK, GET_LINK, OFFER_MIN_GUESTS, OFFER_MAX_GUESTS, OFFER_MIN_ROOMS, OFFER_MAX_ROOMS, OFFER_MIN_PRICE, OFFER_MAX_PRICE, MAIN_MARKER_SIZE, MARKER_SIZE, HOTELS_COUNT, BUNGALOW_MIN_PRICE, HOUSE_MIN_PRICE, FLAT_MIN_PRICE, PALACE_MIN_PRICE, HOTEL_MIN_PRICE, MAIN_MARKER_PATH, MARKER_PATH, DEFAULT_COORDINATES, LAT_START, LAT_END, LNG_START, LNG_END, BUILDINGS, CHECK_TIME, TYPE_OF_ROOM, FACILITIES, PHOTO_EXAMPLES, MAX_GUESTS
};
