/* 1. Truthy */
// truthy: 'nahid',5,true,{},[]
console.log("1. Truthy");
let myVar = 3;
// check any truthy
if (myVar) {
  const answer = (myVar = myVar * 100);
  console.log("Operation 1.1 Truthy -", answer);
} else {
  const answer = (myVar = 0);
  console.log("Operation 1.2 Falsy -", answer);
}

/* 2. Falsy */
// falsy: '', 0, false, null, undefined
console.log("2. Falsy");
let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {
  const answer = (myMoney = myMoney * 100);
  console.log("Operation 2.1 Truthy -", answer);
} else {
  const answer = (myMoney = 0);
  console.log("Operation 2.2 Falsy -", answer);
}

/* 3. Condition */
console.log("3. Condition");
const money = 80;
let food;
if (money > 100) {
  const result = (food = "Biryani");
  console.log("Operation 3.1 -", result);
} else {
  const result = (food = "Tea & Cookie");
  console.log("Operation 3.2 -", result);
}

/* 4. Ternary */
console.log("4. Ternary");
const money1 = 120;
const myVar1 = 200;
let food1 = money1 > 100 ? "Biryani" : "Tea & Cookie";
console.log("Operation 4.1 -", food1);
let drink = money1 > 100 && myVar1 > 100 ? "Coke" : "Fresh Water";
console.log("Operation 4.2 -", drink);

/* 5. Number to String Conversion */
console.log("5. Number to String Conversion");
const mainNumber = 96;
console.log("Operation 5.1 -", mainNumber);
const numberToString = mainNumber + "";
console.log("Operation 5.2 -", numberToString);

/* 6. String to Number Conversion */
console.log("6. String to Number Conversion");
const mainString = "347";
console.log("Operation 6.1 -", mainString);
const stringToNumber = +mainString;
console.log("Operation 6.2 -", stringToNumber);

/* 7. Ternary Direct Execute */
console.log("7. Ternary Direct Execute");
let isActive = true;
const showUser = () => console.log("Operation 7.1 - Show User");
const hideUser = () => console.log("Operation 7.2 - Hide User");
isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

/* 8. Toggle Boolean*/
console.log("8. Toggle Boolean");
let isSuccess = true;
const successResult = (isSuccess = !isSuccess);
console.log("Operation 8.1 -", successResult);
