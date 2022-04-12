const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const isClickEvent = (evt) => evt.key === 'Click';

export {
  isEscEvent,
  isClickEvent
};
