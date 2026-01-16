// Spread parameter

// Array

const number = [1, 6, 5, 23, 6, 9, 4, 1, 3, 8];
const minVal = Math.min(...number);
console.log(minVal);

const number2 = [11, 6, 8, 9];
const number3 = [...number, ...number2];
console.log(number3);

// Object
const car = {
  name: "ford",
  year: "2016",
  color: "red",
};

const car2 = {
  type: "suv",
  color: "yellow",
};

const car_model = { ...car, ...car2 };
console.log(car_model);

// Rest parameter

