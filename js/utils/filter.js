import {
  DELAY
} from '../const.js';
import {
  HOTELS
} from './data-events.js';
import {
  setActiveFilter,
  setDisabledFilterForm
} from './page-mode.js';
import {
  createPins
} from './create-map.js';

const filterForm = document.querySelector('.map__filters');

export const getFilteredData = (hotels) => {
  // Установленные в фильтре пороги цен
  const LOW_COST = 10000;
  const HIGH_COST = 50000;
  const selectedType = document.querySelector('#housing-type').value;
  const selectedPrice = document.querySelector('#housing-price').value;
  const selectedRooms = document.querySelector('#housing-rooms').value;
  const selectedGuests = document.querySelector('#housing-guests').value;

  let filteredHotels = hotels;

  // Выбранный тип жилья
  if (!(selectedType === 'any')) {
    filteredHotels = filteredHotels.filter((hotel) => hotel.offer.type === selectedType);
  }

  // Выбранный ценовой интервал
  if (!(selectedPrice === 'any')) {
    filteredHotels = filteredHotels.filter((hotel) => {
      switch (selectedPrice) {
        case 'low':
          if (hotel.offer.price <= LOW_COST) {
            return true;
          }
          break;
        case 'middle':
          if (hotel.offer.price >= LOW_COST && hotel.offer.price <= HIGH_COST) {
            return true;
          }
          break;
        case 'high':
          if (hotel.offer.price >= HIGH_COST) {
            return true;
          }
          break;
        default:
          break;
      }
    });
  }

  // Выбранное количество комнат
  if (!(selectedRooms === 'any')) {
    filteredHotels = filteredHotels.filter((hotel) => hotel.offer.rooms === Number(selectedRooms));
  }

  // Выбранное количество гостей
  if (!(selectedGuests === 'any')) {
    filteredHotels = filteredHotels.filter((hotel) => {
      switch (selectedGuests) {
        case '0':
          if (hotel.offer.guests === 'Не для гостей') {
            return true;
          }
          break;
        case '1':
          if (hotel.offer.guests === 1) {
            return true;
          }
          break;
        case '2':
          if (hotel.offer.guests === 2) {
            return true;
          }
          break;
        default:
          break;
      }
    });
  }

  // Выбранные удобства
  const selectedFeatures = document.querySelectorAll('.map__features .map__checkbox:checked');
  const features = [];
  selectedFeatures.forEach((feature) => {
    features.push(feature.value);
  });
  if (selectedFeatures.length !== 0) {
    features.forEach((item) => {
      filteredHotels = filteredHotels.filter((hotel) => {
        if (hotel.offer.features) {
          if (hotel.offer.features.includes(item)) {
            return true;
          }
        }
      });
    });
  }

  return filteredHotels;
};

filterForm.addEventListener('change', () => {
  setDisabledFilterForm();
  setTimeout(setActiveFilter, DELAY);
  createPins(getFilteredData(HOTELS));
});
