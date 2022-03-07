//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
export const returnRandomNumber = (a, b, num) => {
  if (a > b || a < 0 || b < 0 || num < 0) {
    return false;
  }
  const randomNumber = Math.random() * (b - a) + a;
  return randomNumber.toFixed(num);
};
