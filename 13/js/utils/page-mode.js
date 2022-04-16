import {
  initFormValidate,
  setUserFormReset,
  setUserFormSubmit
} from './work-with-form.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

export const setDisabledAdForm = () => {
  adForm.classList.add('ad-form--disabled');
  [...adForm.children].forEach((element) => {
    element.setAttribute('disabled', 'true');
  });
};

export const setDisabledFilterForm = () => {
  mapFilters.classList.add('map__filters--disabled');
  [...mapFilters.children].forEach((element) => {
    element.setAttribute('disabled', 'true');
  });
};

export const setActiveAdForm = () => {
  adForm.classList.remove('ad-form--disabled');

  [...adForm.children].forEach((element) => {
    element.removeAttribute('disabled');
  });

  initFormValidate(); // Подключаем валидацию формы
  setUserFormSubmit(); // Установка новой логики отправки формы объявления
  setUserFormReset();
};

export const setActiveFilter = () => {
  mapFilters.classList.remove('map__filters--disabled');

  [...mapFilters.children].forEach((element) => {
    element.removeAttribute('disabled');
  });
};

// Деактивируем все формы
export const setDisabled = () => {
  setDisabledAdForm();
  setDisabledFilterForm();
};
