export const checkNumeral = (number) => {
  if (number === 0) {
    number++;
  }
  if (number < 10) {
    number = `0${number}`;
  }
  return number;
};
