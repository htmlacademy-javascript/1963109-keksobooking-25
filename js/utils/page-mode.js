const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

//неактивное состояние
export const setDisabled = () => {

  adForm.classList.add('ad-form--disabled'); //Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
  mapFilters.classList.add('map__filters--disabled');//Форма c фильтрами map__filters заблокирована так же, как и форма .ad-form;

  [...adForm.children].forEach((element) => { //блокировка всех элементов формы .ad-form
    if (element.matches('fieldset')) {
      element.setAttribute('disabled', 'true');
    }
  });

  [...mapFilters.children].forEach((element) => { //блокировка всех элементов формы .map__filters
    if (element.matches('fieldset')) {
      element.setAttribute('disabled', 'true');
    }
  });
};

//активное состояние
export const setActive = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  [...adForm.children].forEach((element) => { //разблокировка всех элементов формы .ad-form
    if (element.matches('fieldset')) {
      element.removeAttribute('disabled', 'true');
    }
  });

  [...mapFilters.children].forEach((element) => { //разблокировка всех элементов формы .map__filters
    if (element.matches('fieldset')) {
      element.removeAttribute('disabled', 'true');
    }
  });
};
