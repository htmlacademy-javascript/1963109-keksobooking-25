//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const returnRandomDiceNum = (a, b) => {
  if (b > a && a >= 0 && b >= 0) {
    const res = Math.floor(Math.random() * (b - a + 1) + a);
    return res;
  }
};
returnRandomDiceNum(0, 5);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const returnRandomNumber = (a, b, num) => {
  if (a > b || a < 0 || b < 0 || num < 0) {
    return false;
  }
  const randomNumber = Math.random() * (b - a) + a;
  return randomNumber.toFixed(num);
};

returnRandomNumber(1, -1, 4);
