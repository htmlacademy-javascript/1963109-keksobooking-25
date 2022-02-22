//Функция, возвращающая случайное целое число из переданного диапазона включительно.
const ReturnRandomDiceNum = function (a, b) {
  if (b > a && a >= 0 && b >= 0) {
    const res = Math.floor(Math.random() * (b - a + 1) + a);
    return res;
  }
  //console.log("ERROR")
};
ReturnRandomDiceNum(0, 5);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const ReturnRandomNumber = (a, b, num) => {
  if (a > b || a < 0 || b < 0 || num < 0) {
    return false;
    // return console.log("error");
  }
  const randomNumber = Math.random() * (b - a) + a;
  return randomNumber.toFixed(num);
  // return console.log(finalNomber);
};

ReturnRandomNumber(1, -1, 4);
