import {
  setActive
} from './page-mode.js';
import {
  createPopup
} from './create-popup.js';
import { DEFAULT_COORDINATES, MAIN_MARKER_PATH, MARKER_PATH } from '../const.js';

const address = document.querySelector('#address');

export const createMap = (hotelsList) => {
  const {
    defaultLat,
    defaultLng,
  } = DEFAULT_COORDINATES;

  address.value = `${defaultLat}, ${defaultLng}`;

  // Инициализация карты
  const map = L.map('map-canvas')
    .on('load', () => {
      setActive();
    })
    .setView({
      lat: defaultLat,
      lng: defaultLng,
    }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  /* Задание 9 пункт 3: */
  // Кастомный маркер -
  const mainPinIcon = L.icon({
    iconUrl: MAIN_MARKER_PATH,
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
  // Инициализация главного маркера
  const mainPinMarker = L.marker({
    lat: defaultLat,
    lng: defaultLng,
  }, {
    draggable: true,
    icon: mainPinIcon,
  });
  // Добавление главного маркера на карту
  mainPinMarker.addTo(map);

  // Выбор адреса - Задание 9 пункт 4
  mainPinMarker.on('move', (event) => {
    const {
      lat,
      lng,
    } = event.target.getLatLng();

    address.value = `${lat}, ${lng}`;
  });

  // Добавление на карту 'обычных' меток объявлений - (задание 9 пункт 5)
  const createAdMarker = (hotel) => {
    const {
      lat,
      lng,
    } = hotel.location;

    const icon = L.icon({
      iconUrl: MARKER_PATH,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker({
      lat,
      lng,
    }, {
      icon,
    });
    // добавляем балуны
    marker
      .addTo(map)
      .bindPopup(
        createPopup(hotel),
      );
  };

  const createAds = (ads) => ads.forEach(createAdMarker);
  createAds(hotelsList);
};
