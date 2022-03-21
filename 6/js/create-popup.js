const cardTemplate = document.querySelector('#card').content;

export const createPopup = ({
  author,
  offer,
  location,
}) => {

  const cloneCard = cardTemplate.cloneNode(true);

  // Название
  const title = cloneCard.querySelector('.popup__title');
  if (offer.title) {
    title.textContent = offer.title;
  } else {
    title.remove();
  }

  // Адрес (координаты)
  const address = cloneCard.querySelector('.popup__text--address');
  if (location.lat && location.lng) {
    address.textContent = `${location.lat}, ${location.lng}`;
  } else {
    address.remove();
  }

  // Цена за ночь
  const price = cloneCard.querySelector('.popup__text--price');
  if (offer.price) {
    price.textContent = `${offer.price} ₽/ночь`;
  } else {
    price.remove();
  }

  // Тип жилья
  const type = cloneCard.querySelector('.popup__type');
  if (offer.type) {
    switch (offer.type) {
      case 'flat':
        type.textContent = 'Квартира';
        break;
      case 'bungalow':
        type.textContent = 'Бунгало';
        break;
      case 'house':
        type.textContent = 'Дом';
        break;
      case 'palace':
        type.textContent = 'Дворец';
        break;
      case 'hotel':
        type.textContent = 'Отель';
        break;
      default:
        break;
    }
  } else {
    type.remove();
  }

  // Количество комнат и гостей
  const capacity = cloneCard.querySelector('.popup__text--capacity');
  if (offer.rooms && offer.guests) {
    capacity.textContent = `${offer.rooms} комнат(ы) для ${offer.guests} гостей`;
  } else {
    capacity.remove();
  }

  // Время заезда и выезда
  const time = cloneCard.querySelector('.popup__text--time');
  if (offer.checkin && offer.checkout) {
    time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    time.remove();
  }

  // Удобства
  const features = cloneCard.querySelector('.popup__features');
  if (offer.features) {
    features.innerHTML = '';
    offer.features.forEach((feature) => {
      const featuresItem = document.createElement('li');
      featuresItem.className = `popup__feature popup__feature--${feature}`;
      featuresItem.textContent = feature;
      features.append(featuresItem);
    });
  } else {
    features.remove();
  }

  const description = cloneCard.querySelector('.popup__description');
  if (offer.description) {
    description.textContent = offer.description;
  }

  const photos = cloneCard.querySelector('.popup__photos');
  if (offer.photos) {
    photos.innerHTML = '';
    offer.photos.forEach((photo) => {
      const photosItem = document.createElement('img');
      photosItem.className = 'popup__photo';
      photosItem.src = photo;
      photos.append(photosItem);
    });
  } else {
    photos.remove();
  }

  const avatar = cloneCard.querySelector('.popup__avatar');
  if (author.avatar) {
    avatar.src = author.avatar;
  } else {
    avatar.remove();
  }

  const popupWrapper = document.createElement('div');
  popupWrapper.className = 'hotel';
  popupWrapper.append(cloneCard);

  return popupWrapper;
};
