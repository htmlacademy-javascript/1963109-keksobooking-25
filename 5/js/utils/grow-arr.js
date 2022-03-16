import { returnRandomDiceNum } from './return-random-dice-num.js';

// Функия для генерации массива случайной длинны из значений передаваемого массива (элементы повторяются)
export const growArr = (arr) => {
  const newArr = [];

  for (let index = 0; index <= returnRandomDiceNum(1, 10); index++) {
    newArr[index] = arr[returnRandomDiceNum(0, arr.length - 1)];
  }

  return newArr;
};
