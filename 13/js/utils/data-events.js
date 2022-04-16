import {
  createPins
} from './create-map.js';
import { getFilteredData } from './filter.js';
import { setActiveFilter } from './page-mode.js';
import {
  getData,
} from './requests.js';
import {
  resetUserForm
} from './work-with-form.js';
import { isEscEvent } from './check-events.js';

const errorDownloadMessage = document.querySelector('#error-downloading').content;
const errorPostMessage = document.querySelector('#error').content;
const successPostMessage = document.querySelector('#success').content;
const messageWrapper = document.querySelector('body');
const adFormSubmit = document.querySelector('.ad-form__submit');
let HOTELS = [];

// Успешное получение данных
export const getDataSuccess = (data) => {
  HOTELS = data;
  createPins(data); // Создаем карту с полученными данными
  setActiveFilter(); // Активируем фильтр
  getFilteredData(data); // Активируем настройки фильтра
};

// Ошибка получения данных
export const getDataFail = () => {
  // Если сообщение ранее не выводилось
  if (!document.querySelector('.error-downloading')) {
    messageWrapper.append(errorDownloadMessage);
  }

  const errDownloadContent = document.querySelector('.error-downloading');
  const downloadBtn = document.querySelector('.error-downloading__button');

  // Показываем сообщение
  if (errDownloadContent.classList.contains('hidden')) {
    errDownloadContent.classList.remove('hidden');
  }

  const onDownloadMessageClose = () => {
    errDownloadContent.classList.add('hidden'); // Скрывает
    getData(getDataSuccess, getDataFail); // Снова пытаемся получить данные
    downloadBtn.removeEventListener('click', onDownloadMessageClose); // Удаляет Event Listener
  };

  // Добавляет Event Listener
  downloadBtn.addEventListener('click', onDownloadMessageClose);
};

// Успешная отправка данных
export const sentDataSuccess = () => {
  // Если сообщение ранее не выводилось
  if (!document.querySelector('.success')) {
    messageWrapper.append(successPostMessage);
  }

  const successContent = document.querySelector('.success');
  const onSuccessMessageClose = () => {
    successContent.classList.add('hidden');
    successContent.removeEventListener('click', onSuccessMessageClose);
  };
  const onSuccessMessageEsc = (evt) => {
    if (isEscEvent(evt)) {
      successContent.classList.add('hidden');
      document.removeEventListener('keydown', onSuccessMessageEsc);
    }
  };

  // Закрытие сообщения
  if (successContent) {
    successContent.addEventListener('click', onSuccessMessageClose);
    document.addEventListener('keydown', onSuccessMessageEsc);
  }

  resetUserForm(); // Значения инпутов устанавливаем по дефолту
  adFormSubmit.removeAttribute('disabled'); // Активируем кнопку "Опубликовать"

  resetUserForm();
};

// Ошибка отправки данных
export const sentDataFail = () => {
  // Если сообщение ранее не выводилось
  if (!document.querySelector('.error')) {
    messageWrapper.append(errorPostMessage);
  }

  const errContent = document.querySelector('.error');
  const errBtn = document.querySelector('.error__button');

  // Показываем сообщение с помощью удаления класса "hidden"
  if (errContent.classList.contains('hidden')) {
    errContent.classList.remove('hidden');
  }

  const onErrorMessageClose = () => {
    errContent.classList.add('hidden');
    adFormSubmit.removeAttribute('disabled'); // Активируем кнопку "Опубликовать"
    errBtn.removeEventListener('click', onErrorMessageClose);
  };
  const onErrorMessageExit = () => {
    errContent.classList.add('hidden');
    adFormSubmit.removeAttribute('disabled'); // Активируем кнопку "Опубликовать"
    errContent.removeEventListener('click', onErrorMessageClose);
  };
  const onErrorMessageEsc = (evt) => {
    if (isEscEvent(evt)) {
      errContent.classList.add('hidden');
      adFormSubmit.removeAttribute('disabled'); // Активируем кнопку "Опубликовать"
      document.removeEventListener('keydown', onErrorMessageEsc);
    }
  };

  // Скрываем сообщение по нажатию на кнопку "Попробовать снова",
  // на область экрана и по нажатию на кнопку клавиатуры "Esc"
  errBtn.addEventListener('click', onErrorMessageClose);

  errContent.addEventListener('click', onErrorMessageExit);

  document.addEventListener('keydown', onErrorMessageEsc);
};

export {HOTELS};
