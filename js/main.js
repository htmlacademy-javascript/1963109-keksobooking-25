import { getData } from './utils/requests';
import { onGetDataFail, onGetDataSuccess } from './utils/data-events.js';
import { setDisabled } from './utils/page-mode.js';
import { setUserFormReset, setUserFormSubmit, setValidForm } from './utils/work-with-form.js';

setDisabled(); // Дизейблим форму
setValidForm(); // Подключаем валидацию формы
getData(onGetDataSuccess, onGetDataFail); // Получаем данные отелей с сервера
setUserFormSubmit(); // Установка новой логики отправки формы объявления
setUserFormReset(); // Установка новой логики сброса формы объявления
