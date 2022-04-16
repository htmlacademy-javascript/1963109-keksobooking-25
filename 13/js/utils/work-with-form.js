import '../../pristine/pristine.min.js';
import { DEFAULT_COORDINATES, BUNGALOW_MIN_PRICE, HOUSE_MIN_PRICE, FLAT_MIN_PRICE, PALACE_MIN_PRICE, HOTEL_MIN_PRICE, MAX_GUESTS } from '../const.js';
import { postData } from './requests.js';
import { HOTELS, sentDataFail, sentDataSuccess } from './data-events.js';
import { createPins, initMap } from './create-map.js';

const avatar = document.querySelector('#avatar');
const avatarWrap = document.querySelector('.ad-form-header__preview');
const title = document.querySelector('#title');
const addressInput = document.querySelector('#address');
const appsType = document.querySelector('#type');
const apsOptions = [...appsType];
const appsPrice = document.querySelector('#price');
const roomNumber = document.querySelector('#room_number');
const countRooms = [...roomNumber.children];
const capacity = document.querySelector('#capacity');
const guests = [...capacity.children];
const reversedGuests = guests.slice().reverse();
const timein = document.querySelector('#timein');
const timeins = [...timein];
const timeout = document.querySelector('#timeout');
const timeouts = [...timeout];
const features = document.querySelectorAll('.features__checkbox');
const description = document.querySelector('#description');
const images = document.querySelector('#images');
const imagesWrap = document.querySelector('.ad-form__photo');
const adForm = document.querySelector('.ad-form');
const adFormSubmit = document.querySelector('.ad-form__submit');
const userFormReset = document.querySelector('.ad-form__reset');
const mapFilters = document.querySelectorAll('.map__filter');
const mapCheckboxes = document.querySelectorAll('.map__checkbox');
let newImagesImg;

export const initFormValidate = () => {
  const form = document.querySelector('.ad-form');

  // Синхронизация полей «Количество комнат» и «Количество мест»
  const enableGuests = (selectedRooms) => {
    reversedGuests.forEach((guest, index) => {
      if (index <= selectedRooms && index !== 0 && selectedRooms !== MAX_GUESTS) {
        guest.classList.remove('hidden');
        if (index === 1) {
          guest.setAttribute('selected', 'selected');
          capacity.value = index;
        }
      } else if (index === 0 && selectedRooms === MAX_GUESTS) {
        guest.classList.remove('hidden');
        guest.setAttribute('selected', 'selected');
      } else {
        guest.classList.add('hidden');
        guest.removeAttribute('selected');
      }
    });
  };

  // Логика выбора типа жилья (Задание 8.2)
  appsType.addEventListener('change', (event) => {
    switch (event.target.value) {
      case 'flat':
        appsPrice.setAttribute('min', `${FLAT_MIN_PRICE} ₽`);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', `от ${FLAT_MIN_PRICE} ₽`);
        break;
      case 'bungalow':
        appsPrice.setAttribute('min', `${BUNGALOW_MIN_PRICE} ₽`);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', `от ${BUNGALOW_MIN_PRICE} ₽`);
        break;
      case 'house':
        appsPrice.setAttribute('min', `${HOUSE_MIN_PRICE} ₽`);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', `от ${HOUSE_MIN_PRICE} ₽`);
        break;
      case 'palace':
        appsPrice.setAttribute('min', `${PALACE_MIN_PRICE} ₽`);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', `от ${PALACE_MIN_PRICE} ₽`);
        break;
      case 'hotel':
        appsPrice.setAttribute('min', `${HOTEL_MIN_PRICE} ₽`);
        appsPrice.value = '';
        appsPrice.setAttribute('placeholder', `от ${HOTEL_MIN_PRICE} ₽`);
        break;
      default:
        break;
    }
  });

  roomNumber.addEventListener('change', (event) => {
    enableGuests(event.target.value);
  });

  const syncTime = (val, currentSelect) => {
    let anotherSelect;
    let anotherOptions;
    if (currentSelect === 'in') {
      anotherSelect = timeout;
      anotherOptions = timeouts;
    } else if (currentSelect === 'out') {
      anotherSelect = timein;
      anotherOptions = timeins;
    }
    anotherSelect.value = val;
    anotherOptions.forEach((time) => {
      if (time.value !== val) {
        time.removeAttribute('selected');
      } else {
        time.setAttribute('selected', 'selected');
      }
    });
  };

  timein.addEventListener('change', (evt) => {
    syncTime(evt.target.value, 'in');
  });

  timeout.addEventListener('change', (evt) => {
    syncTime(evt.target.value, 'out');
  });

  avatar.addEventListener('change', () => {
    if (avatar.files && avatar.files[0]) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        document.querySelector('.ad-form-header__preview img').classList.add('hidden');
        const newAvatarImg = document.createElement('img');
        newAvatarImg.className = 'preview-img';
        newAvatarImg.setAttribute('src', evt.target.result);
        avatarWrap.prepend(newAvatarImg);
      };
      reader.readAsDataURL(avatar.files[0]);
    }
  });

  images.addEventListener('change', () => {
    if (images.files && images.files[0]) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        newImagesImg = document.createElement('img');
        newImagesImg.className = 'preview-img';
        newImagesImg.setAttribute('src', evt.target.result);
        imagesWrap.prepend(newImagesImg);
      };
      reader.readAsDataURL(images.files[0]);
    }
  });

  const pristine = new Pristine(form, {
    classTo: 'ad-form__label',
    errorTextParent: 'ad-form__label',
    errorTextClass: 'ad-form__error-text',
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      /*eslint-disable*/
      console.log('Можно отправлять');
    } else {
      console.log('Форма невалидна');
      /*eslint-enable*/
    }
  });
};

const setCurrentOption = (arr, index) => {
  arr.forEach((option, itemIndex) => {
    if (option.hasAttribute('selected')) {
      option.removeAttribute('selected');
    }
    if (itemIndex === index) {
      option.setAttribute('selected', 'selected');
    }
  });
};

// Функция сброса формы создания объявления
export const resetUserForm = () => {
  const {
    defaultLat,
    defaultLng,
  } = DEFAULT_COORDINATES;
  // Аватар
  avatar.value = '';
  document.querySelector('.ad-form-header__preview img').classList.remove('hidden');
  document.querySelector('.ad-form-header__preview img').setAttribute('src', 'img/muffin-grey.svg');

  // Заголовок
  title.value = '';

  // Координаты
  initMap();
  addressInput.value = `${defaultLat.toFixed(5)}, ${defaultLng.toFixed(5)}`;

  // Тип жилья
  setCurrentOption(apsOptions, 1);

  // Цена за ночь
  appsPrice.value = appsPrice.defaultValue;
  appsPrice.setAttribute('placeholder', 'от 1000 у.е.');

  // Количество комнат
  setCurrentOption(countRooms, 0);

  // Количество гостей
  setCurrentOption(guests, 2);
  capacity.value = '1';

  // Время заезда
  setCurrentOption(timeins, 0);
  timein.value = '12:00';

  // Время выезда
  setCurrentOption(timeouts, 0);
  timeout.value = '12:00';

  // Удобства
  features.forEach((feature) => {
    feature.checked = false;
  });

  // Описание
  description.value = '';

  // Фото жилья
  images.value = '';
  if (document.querySelector('.preview-img')) {
    document.querySelectorAll('.preview-img').forEach((img) => {
      img.remove();
    });
  }

  // Сброс селектов фильтра
  mapFilters.forEach((filter) => {
    filter.value = 'any';
  });

  // Сброс чекбоксов фильтра
  mapCheckboxes.forEach((checkbox) => {
    if (checkbox.checked === true) {
      checkbox.checked = false;
    }
  });

  createPins(HOTELS);
};

// Функция переопределения логики кнопки "Опубликовать"
export const setUserFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    adFormSubmit.setAttribute('disabled', '');

    postData(
      sentDataSuccess,
      sentDataFail,
      new FormData(evt.target),
    );
  });
};

// Функция переопределение логики кнопки "очистить"
export const setUserFormReset = () => {
  userFormReset.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetUserForm();
  });
};

