import { returnRandomDiceNum } from './return-random-dice-num.js';

// Функия для генерации массива случайной длинны из значений передаваемого массива (элементы повторяются)
export const growArr = (arr) => {
  const newArr = [];

  for (let index = 0; index <= returnRandomDiceNum(1, 10); index++) {
    newArr[index] = arr[returnRandomDiceNum(0, arr.length - 1)];
  }

  return newArr;
};

// Функия для генерации массива случайной длинны из значений передаваемого массива (элементы НЕ повторяются)
export const shuffleArr = (arr) => {
  const newArr = [...arr];

  for (let index = newArr.length - 1; index > 0; index--) {
    const secondIndex = Math.floor(Math.random() * (index + 1));
    [newArr[index], newArr[secondIndex]] = [newArr[secondIndex], newArr[index]];
  }

  return newArr.slice(0, returnRandomDiceNum(0, newArr.length - 1));
};
