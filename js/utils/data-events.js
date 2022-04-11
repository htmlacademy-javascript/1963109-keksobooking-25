import {
  createMap
} from './create-map.js';
import {
  getData,
  postData
} from './requests.js';
import {
  resetUserForm
} from './work-with-form.js';

const errorDownloadMessage = document.querySelector('#error-downloading').content;
const errorPostMessage = document.querySelector('#error').content;
const successPostMessage = document.querySelector('#success').content;
const messageWrapper = document.querySelector('body');
const adFormSubmit = document.querySelector('.ad-form__submit');

// Успешное получение данных
export const getDataSuccess = (data) => {
  createMap(data); // Создаем карту с полученными данными
};

// Ошибка получения данных
export const getDataFail = () => {
  // Если сообщение ранее не выводилось
  if (!document.querySelector('.error-downloading')) {
    messageWrapper.prepend(errorDownloadMessage);
  }

  const errDownloadContent = document.querySelector('.error-downloading');
  const downloadBtn = document.querySelector('.error-downloading__button');

  // Показываем сообщение с помощью удаления класса "hidden" (если ранее он был добавлен)
  if (errDownloadContent.classList.contains('hidden')) {
    errDownloadContent.classList.remove('hidden');
  }

  // Скрываем сообщение и пытаемся получить данные ещё раз
  downloadBtn.addEventListener('click', () => {
    errDownloadContent.classList.add('hidden');
    getData(getDataSuccess, getDataFail);
  });
};

// Успешная отправка данных
export const sentDataSuccess = () => {
  // Если сообщение ранее не выводилось
  if (!document.querySelector('.success')) {
    messageWrapper.prepend(successPostMessage);
  }

  const successContent = document.querySelector('.success');

  // Отображение сообщения пользователю
  successContent.style.display = 'block';
  successContent.classList.add('active');

  // Плавное исчезновение сообщения
  if (successContent) {
    successContent.addEventListener('click', () => {
      successContent.classList.remove('active');
      setTimeout(() => {
        successContent.style.display = 'none';
      }, 4000);
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        successContent.classList.remove('active');
        setTimeout(() => {
          successContent.style.display = 'none';
        }, 2000);
      }
    });
  }

  resetUserForm(); // Значения инпутов устанавливаем по дефолту
  adFormSubmit.removeAttribute('disabled'); // Активируем кнопку "Опубликовать"
};

// Ошибка отправки данных
export const sentDataFail = () => {
  // Если сообщение ранее не выводилось
  if (!document.querySelector('.error')) {
    messageWrapper.prepend(errorPostMessage);
  }

  const errContent = document.querySelector('.error');
  const errBtn = document.querySelector('.error__button');

  // Показываем сообщение с помощью удаления класса "hidden" (если ранее он был добавлен)
  if (errContent.classList.contains('hidden')) {
    errContent.classList.remove('hidden');
  }

  // Скрываем сообщение и пытаемся отправить данные ещё раз
  errBtn.addEventListener('click', () => {
    errContent.classList.add('hidden');
    postData(sentDataSuccess, sentDataFail);
  });
};
