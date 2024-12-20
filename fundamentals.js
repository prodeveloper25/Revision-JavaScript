/* 1. how to declare a variable using let and const */
const fatherNames = "Kazi Mohamed Mosharop Hossain";
let season = "winter";
season = "reiny";

/* 2. Condition >,<,===,!=,<=,>= */
// 2.1 Multiple Condition &&, ||
if (fatherNames === "Kazi Mohamed Mosharop Hossain" || season === "winter") {
  console.log("If is Win");
} else if (
  fatherNames === "kazi mohamed mosharop hossain" &&
  season === "reiny"
) {
  console.log("else if is win");
} else {
  console.log("else is win");
}

/* 3.Array */
// 3.1 Index: array er index count kore 0 theke
// 3.2 Length: array te koita item ache ta dekhai
// 3.3 push: jekono kichu array dukate parbo abong seta sobar last a add hobe
// 3.4 pop: array er akti item delete hoye jabe jeta holo last er
// 3.5 shift: ata holo kichuta pop er moto pop diye array item delete kora hoi tobe seta last er ta delete hoi kintu shift diye sobar ager ta delete hoi.
// 3.6 unshift: ata kichuta push er moto kaj kore just unshift er dara kichu add korle seta sobar prothome add hoi
// 3.7 concat: concat diye onek gulo  array ke akshath kora  othoba arekti array item add kora
// 3.8 copyWithin: copyWithin er Structure holo copyWithin(target, start, end), copyWithin er vito target ta require are 2 ta hocche optional

const number = [33, 67, 92, 42, 95, 74];
const numberOne = [67, 23, 89, 39];
const numberTwo = [83, 16, 41, 39];
console.log("Array Length" + " " + number.length);
number[2] = 45;
number.push(96);
number.pop();
number.unshift(12);
number.shift();
console.log("Concat Methods" + " " + number.concat(numberOne, numberTwo));
console.log("Copy Within" + " " + numberOne.copyWithin(3, 0));
console.log(number);

/* 4. For Loop */
const numbersForLoop = [12, 84, 7, 34, 65, 53, 67, 78];
console.log("For Loop");
for (let i = 0; i < 4; i++) {
  const number = numbersForLoop[i];
  console.log(number);
}

/* 5. While Loop */
let numbersOfWhileLoop = 0;
console.log("While Loop");
while (numbersOfWhileLoop < 10) {
  console.log(numbersOfWhileLoop);
  numbersOfWhileLoop++;
}

/* 6. Function */
function plusAndMultiply(num1, num2) {
  const plus = num1 + num2;
  return plus;
}
const plusAndMultiplyOutput = plusAndMultiply(2, 3);
console.log("Plus And Multiply" + " " + plusAndMultiplyOutput);
// ----
function firstAndLastName(first, last) {
  const result = first + " " + last;
  return result;
}
const firstAndLastNameOutput = firstAndLastName("Nahid", "Hasan");
console.log(firstAndLastNameOutput);
