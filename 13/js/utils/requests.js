import { GET_LINK, POST_LINK } from '../const.js';

// Получение данных - Задание 11 пункт 1
export const getData = (onSuccess, onError) => {
  fetch(GET_LINK, {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((hotels) => {
      onSuccess(hotels);
    })
    .catch((err) => {
      /*eslint-disable*/
      console.log(err);
      onError(err);
    });
};

// Отправка данных - Задание 11 пункт 1
export const postData = (onSuccess, onError, body) => {
  fetch(
    POST_LINK, {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .catch(() => {
      onError();
    });
};
