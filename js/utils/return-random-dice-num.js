//Функция, возвращающая случайное целое число из переданного диапазона включительно.
export const returnRandomDiceNum = (a, b) => {
  if (b > a && a >= 0 && b >= 0) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
};
