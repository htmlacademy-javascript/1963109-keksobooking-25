import '../../pristine/pristine.min.js';
import { MAX_GUESTS, BUNGALOW_MIN_PRICE, HOUSE_MIN_PRICE, FLAT_MIN_PRICE, PALACE_MIN_PRICE, HOTEL_MIN_PRICE } from '../const.js';
import { postData } from './requests.js';
import { sentDataFail, sentDataSuccess } from './data-events.js';
import { AD_FORM, AD_FORM_SUBMIT, USER_FORM_RESET, AVATAR, TITLE, ADDRESS, IMAGES, APPARTMENTS_TYPE,
  APPARTMENTS_OPTIONS, APPARTMENTS_PRICE, CAPACITY, GUESTS, ROOM_NUMBER, COUNT_ROOMS,
  TIMEIN, TIMEIN_ARR, TIMEOUT, TIMEOUT_ARR, FEATURES, DESCRIPTION} from '../const.js';

export const initFormValidate = () => {
  const form = document.querySelector('.ad-form');

  // Синхронизация полей «Количество комнат» и «Количество мест» задание 8.1
  const enableGuests = (selectedRooms) => {
    GUESTS.slice().reverse().forEach((guest, index) => {
      if (index <= selectedRooms && index !== 0 && selectedRooms !== String(MAX_GUESTS)) {
        if (guest.classList.contains('hidden')) {
          guest.classList.remove('hidden');
        }
        if (index === 1) {
          guest.setAttribute('selected', 'selected');
          CAPACITY.value = index;
        }
      } else if (index === 0 && selectedRooms === String(MAX_GUESTS)) {
        guest.classList.remove('hidden');
        guest.setAttribute('selected', 'selected');
      } else {
        guest.classList.add('hidden');
        guest.removeAttribute('selected');
      }
    });
  };

  // Логика выбора типа жилья (Задание 8.2)
  APPARTMENTS_TYPE.addEventListener('change', (event) => {
    switch (event.target.value) {
      case 'flat':
        APPARTMENTS_PRICE.setAttribute('min', `${FLAT_MIN_PRICE} ₽`); //?
        APPARTMENTS_PRICE.value = '';
        APPARTMENTS_PRICE.setAttribute('placeholder', `от ${FLAT_MIN_PRICE} ₽`); //?
        break;
      case 'bungalow':
        APPARTMENTS_PRICE.setAttribute('min', `${BUNGALOW_MIN_PRICE} ₽`); //?
        APPARTMENTS_PRICE.value = '';
        APPARTMENTS_PRICE.setAttribute('placeholder', `от ${BUNGALOW_MIN_PRICE} ₽`); //?
        break;
      case 'house':
        APPARTMENTS_PRICE.setAttribute('min', `${HOUSE_MIN_PRICE} ₽`); //?
        APPARTMENTS_PRICE.value = '';
        APPARTMENTS_PRICE.setAttribute('placeholder', `от ${HOUSE_MIN_PRICE} ₽`); //?
        break;
      case 'palace':
        APPARTMENTS_PRICE.setAttribute('min', `${PALACE_MIN_PRICE} ₽`); //?
        APPARTMENTS_PRICE.value = '';
        APPARTMENTS_PRICE.setAttribute('placeholder', `от ${PALACE_MIN_PRICE} ₽`); //?
        break;
      case 'hotel':
        APPARTMENTS_PRICE.setAttribute('min', `${HOTEL_MIN_PRICE} ₽`); //?
        APPARTMENTS_PRICE.value = '';
        APPARTMENTS_PRICE.setAttribute('placeholder', `от ${HOTEL_MIN_PRICE} ₽`); //?
        break;
      default:
        break;
    }
  });

  ROOM_NUMBER.addEventListener('change', (event) => {
    enableGuests(event.target.value);
  });

  // Синхронизация времени заезда и времени выезда (Задание 8.2)
  const conditionTime = (arr, currentTime) => {
    arr.forEach((time) => {
      if (time.value === currentTime.value) {
        time.setAttribute('selected', 'selected');
      } else {
        time.removeAttribute('selected');
      }
    });
  };

  const syncTime = (target, str) => {
    if (str === 'in') {
      conditionTime(TIMEOUT_ARR, target);
    }
    if (str === 'out') {
      conditionTime(TIMEIN_ARR, target);
    }
  };

  TIMEIN.addEventListener('change', (event) => {
    syncTime(event.target, 'in');
  });

  TIMEOUT.addEventListener('change', (event) => {
    syncTime(event.target, 'out');
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
  // Аватар
  AVATAR.value = '';

  // Заголовок
  TITLE.value = '';

  // Координаты
  ADDRESS.value = ADDRESS.defaultValue;

  // Тип жилья
  setCurrentOption(APPARTMENTS_OPTIONS, 0);

  // Цена за ночь
  APPARTMENTS_PRICE.value = APPARTMENTS_PRICE.defaultValue;
  APPARTMENTS_PRICE.setAttribute('placeholder', 'от 0 ₽');

  // Количество комнат
  setCurrentOption(COUNT_ROOMS, 0);

  // Количество гостей
  setCurrentOption(GUESTS, 2);
  CAPACITY.value = '1';

  // Время заезда
  setCurrentOption(TIMEIN_ARR, 0);
  TIMEIN.value = '12:00';

  // Время выезда
  setCurrentOption(TIMEOUT_ARR, 0);
  TIMEOUT.value = '12:00';

  // Удобства
  FEATURES.forEach((feature) => {
    feature.checked = false;
  });

  // Описание
  DESCRIPTION.value = '';

  // Фото жилья
  IMAGES.value = '';
};

// Функция переопределения логики кнопки "Опубликовать"
export const setUserFormSubmit = () => {
  AD_FORM.addEventListener('submit', (evt) => {
    evt.preventDefault();
    AD_FORM_SUBMIT.setAttribute('disabled', '');

    postData(
      sentDataSuccess,
      sentDataFail,
      new FormData(evt.target),
    );
  });
};

// Функция переопределение логики кнопки "очистить"
export const setUserFormReset = () => {
  USER_FORM_RESET.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetUserForm();
  });
};

