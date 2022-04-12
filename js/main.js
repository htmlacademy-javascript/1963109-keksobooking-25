import { setDisabled } from './utils/page-mode.js';
import { initMap } from './utils/create-map.js';

document.addEventListener('DOMContentLoaded', ()=>{
  setDisabled(); // Дизейблим форму
  initMap(); //
});
