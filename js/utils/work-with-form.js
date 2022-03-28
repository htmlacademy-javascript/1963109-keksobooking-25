import '../../pristine/pristine.min.js';
/*eslint-disable*/
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
      if (index <= selectedRooms && index !== 0 && selectedRooms !== '100') {
        if (guest.classList.contains('hidden')) {
          guest.classList.remove('hidden');
        }
        if (index === 1) {
          guest.setAttribute('selected', 'selected');
          capacity.value = index;
        }
      } else if (index === 0 && selectedRooms === '100') {
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
        appartmentsPrice.setAttribute('min', 1000);
        appartmentsPrice.setAttribute('placeholder', 'от 1000 у.е.');
        break;
      case 'bungalow':
        appartmentsPrice.setAttribute('min', 0);
        appartmentsPrice.setAttribute('placeholder', 'от 0 у.е.');
        break;
      case 'house':
        appartmentsPrice.setAttribute('min', 5000);
        appartmentsPrice.setAttribute('placeholder', 'от 5000 у.е.');
        break;
      case 'palace':
        appartmentsPrice.setAttribute('min', 10000);
        appartmentsPrice.setAttribute('placeholder', 'от 10000 у.е.');
        break;
      case 'hotel':
        appartmentsPrice.setAttribute('min', 3000);
        appartmentsPrice.setAttribute('placeholder', 'от 3000 у.е.');
        break;
      default:
        break;
    }
  });

  roomNumber.addEventListener('change', (event) => {
    enableGuests(event.target.value);
  });

  const pristine = new Pristine(form, {
    classTo: 'ad-form__label',
    errorTextParent: 'ad-form__label',
    errorTextClass: 'ad-form__error-text',
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    console.log(pristine);
    const isValid = pristine.validate();
    if (isValid) {
      console.log('Можно отправлять');
    } else {
      console.log('Форма невалидна');
    }
  });
}

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
