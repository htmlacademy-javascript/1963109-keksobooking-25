import '../../pristine/pristine.min.js';
import { MAX_GUESTS, BUNGALOW_MIN_PRICE, HOUSE_MIN_PRICE, FLAT_MIN_PRICE, PALACE_MIN_PRICE, HOTEL_MIN_PRICE } from '../const.js';

export const initFormValidate = () => {
  const appartmentsType = document.querySelector('#type');
  const appartmentsPrice = document.querySelector('#price');
  const form = document.querySelector('.ad-form');
  const capacity = document.querySelector('#capacity');
  const roomNumber = document.querySelector('#room_number');
  const guests = [...capacity.children];
  const timein = document.querySelector('#timein');
  const timeout = document.querySelector('#timeout');

  // Синхронизация полей «Количество комнат» и «Количество мест» задание 8.1
  const enableGuests = (selectedRooms) => {
    guests.slice().reverse().forEach((guest, index) => {
      if (index <= selectedRooms && index !== 0 && selectedRooms !== String(MAX_GUESTS)) {
        if (guest.classList.contains('hidden')) {
          guest.classList.remove('hidden');
        }
        if (index === 1) {
          guest.setAttribute('selected', 'selected');
          capacity.value = index;
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
  appartmentsType.addEventListener('change', (event) => {
    switch (event.target.value) {
      case 'flat':
        appartmentsPrice.setAttribute('min', FLAT_MIN_PRICE); //?
        appartmentsPrice.setAttribute('placeholder', `от ${FLAT_MIN_PRICE} ₽`); //?
        break;
      case 'bungalow':
        appartmentsPrice.setAttribute('min', BUNGALOW_MIN_PRICE); //?
        appartmentsPrice.setAttribute('placeholder', `от ${BUNGALOW_MIN_PRICE} ₽`); //?
        break;
      case 'house':
        appartmentsPrice.setAttribute('min', HOUSE_MIN_PRICE);
        appartmentsPrice.setAttribute('placeholder', `от ${HOUSE_MIN_PRICE} ₽`); //?
        break;
      case 'palace':
        appartmentsPrice.setAttribute('min', PALACE_MIN_PRICE);
        appartmentsPrice.setAttribute('placeholder', `от ${PALACE_MIN_PRICE} ₽`); //?
        break;
      case 'hotel':
        appartmentsPrice.setAttribute('min', HOTEL_MIN_PRICE);
        appartmentsPrice.setAttribute('placeholder', `от ${HOTEL_MIN_PRICE} ₽`);
        break;
      default:
        break;
    }
  });

  roomNumber.addEventListener('change', (event) => {
    enableGuests(event.target.value);
  });

  // Синхронизация времени заезда и времени выезда (Задание 8.2)
  const timeinArr = [...timein.children];
  const timeoutArr = [...timeout.children];

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
      conditionTime(timeoutArr, target);
    }
    if (str === 'out') {
      conditionTime(timeinArr, target);
    }
  };

  timein.addEventListener('change', (event) => {
    syncTime(event.target, 'in');
  });

  timeout.addEventListener('change', (event) => {
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


