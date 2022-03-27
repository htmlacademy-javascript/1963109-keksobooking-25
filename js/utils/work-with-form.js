import '../../pristine/pristine.min.js';
/*eslint-disable*/
export const initFormValidate = () => {
  const form = document.querySelector('.ad-form');
  const capacity = document.querySelector('#capacity');
  const roomNumber = document.querySelector('#room_number');
  const guests = [...capacity.children];

  // Синхронизация полей «Количество комнат» и «Количество мест»
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

