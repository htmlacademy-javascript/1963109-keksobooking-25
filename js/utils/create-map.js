import {
  setActiveAdForm
} from './page-mode.js';
import {
  createPopup
} from './create-popup.js';
import { DEFAULT_COORDINATES, MAIN_MARKER_PATH, MAIN_MARKER_SIZE, MARKERS_COUNT, MARKER_PATH, MARKER_SIZE, TITLE_LAYER_ATTRIBUTION, TITLE_LAYER_URL } from '../const.js';
import {
  getData
} from './requests.js';
import {
  getDataFail,
  getDataSuccess
} from './data-events.js';

const addressInput = document.querySelector('#address');
let map;
let mainPinIcon;
let mainPinMarker;
let markers;

export const initMainMarker = () => {
  if (mainPinMarker) {
    mainPinMarker.remove();
  }
  const {
    defaultLat,
    defaultLng,
  } = DEFAULT_COORDINATES;
  // Кастомный маркер -
  mainPinIcon = L.icon({
    iconUrl: MAIN_MARKER_PATH,
    iconSize: MAIN_MARKER_SIZE,
    iconAnchor: [26, 52],
  });
  // Инициализация главного маркера
  const mainMarker = L.marker({
    lat: defaultLat,
    lng: defaultLng,
  }, {
    draggable: true,
    icon: mainPinIcon,
  });

  // Выбор адреса
  mainMarker.on('move', (event) => {
    const {
      lat,
      lng,
    } = event.target.getLatLng();

    addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  });

  return mainMarker;
};

// Инициализация карты
export const initMap = () => {
  const {
    defaultLat,
    defaultLng,
  } = DEFAULT_COORDINATES;

  /*eslint-disable*/
  addressInput.value = `${defaultLat.toFixed(5)}, ${defaultLng.toFixed(5)}`;

  if (map === undefined) {
    map = L.map('map-canvas')
      .on('load', () => {
        setActiveAdForm();
        getData(getDataSuccess, getDataFail); // Получаем данные отелей с сервера
      })
      .setView({
        lat: defaultLat,
        lng: defaultLng,
      }, 12);
    L.tileLayer(
      TITLE_LAYER_URL,
      {
        attribution: TITLE_LAYER_ATTRIBUTION,
      },
    ).addTo(map);
  }

  mainPinMarker = initMainMarker();

  // Добавление главного маркера на карту
  mainPinMarker.addTo(map);
};

export const createPins = (hotels) => {
  if (markers) {
    markers.forEach((item) => {
      map.removeLayer(item);
    });
  }

  markers = [];

  // Добавление на карту 'обычных' меток объявлений
  const createAdMarker = (hotel) => {
    const {
      lat,
      lng,
    } = hotel.location;

    const icon = L.icon({
      iconUrl: MARKER_PATH,
      iconSize: MARKER_SIZE,
      iconAnchor: [20, 40],
    });

    const marker = L.marker({
      lat,
      lng,
    }, {
      icon,
    });

    marker
      .addTo(map)
      .bindPopup(
        createPopup(hotel),
      );

    markers.push(marker);
  };

  const createAds = (ads) => {
    if (ads.length > MARKERS_COUNT) {
      for (let index = 0; index < MARKERS_COUNT; index++) {
        createAdMarker(ads[index]);
      }
    } else {
      ads.forEach(createAdMarker);
    }
  };
  createAds(hotels);
};

export {
  mainPinMarker,
  mainPinIcon
};
