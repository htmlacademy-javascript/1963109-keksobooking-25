const popupInner = document.querySelector('.map');//??
const cardTemplate = document.querySelector('#card').content;//создаем переменную для шаблона

//??
export const createPopup = (obj) => {
  const {
    author,
    offer,
  } = obj;

  const cloneCard = cardTemplate.cloneNode(true);

  const title = cloneCard.querySelector('.popup__title'); //Выведите заголовок объявления offer.title в заголовок .popup__title
  title.textContent = offer.title;

  const address = cloneCard.querySelector('.popup__text--address'); //Выведите адрес offer.address в блок .popup__text--address
  address.textContent = offer.address;

  const price = cloneCard.querySelector('.popup__text--price'); //Выведите цену offer.price в блок .popup__text--price строкой вида {{offer.price}} ₽/ночь. Например, «5200 ₽/ночь».
  price.textContent = `${offer.price} ₽/ночь`;

  const type = cloneCard.querySelector('.popup__type');//В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями
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

  const capacity = cloneCard.querySelector('.popup__text--capacity'); //Выведите количество гостей и комнат
  capacity.textContent = `${offer.rooms} комната(ы) для ${offer.guests} гостя(ей)`;

  const time = cloneCard.querySelector('.popup__text--time');//Время заезда и выезда
  time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const features = cloneCard.querySelector('.popup__features'); //В список .popup__features выведите все доступные удобства в объявлении
  features.innerHTML = '';
  //??
  offer.features.forEach((feature) => {
    const featuresItem = document.createElement('li');
    featuresItem.className = `popup__feature popup__feature--${feature}`;
    featuresItem.textContent = feature;
    features.append(featuresItem);
  });

  const description = cloneCard.querySelector('.popup__description');//В блок .popup__description выведите описание объекта недвижимости offer.description
  description.textContent = offer.description;

  const photos = cloneCard.querySelector('.popup__photos'); //В блок .popup__photos выведите все фотографии из списка offer.photos
  photos.innerHTML = '';
  //??
  offer.photos.forEach((photo) => {
    const photosItem = document.createElement('img');
    photosItem.className = 'popup__photo';
    photosItem.src = photo;
    photos.prepend(photosItem);
  });

  //Замените значение атрибута src у аватарки пользователя .popup__avatar на значение поля author.avatar.
  const avatar = cloneCard.querySelector('.popup__avatar');
  avatar.src = author.avatar;

  popupInner.append(cloneCard);
};
