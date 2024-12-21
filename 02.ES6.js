const numbers = [33, 67, 92, 42, 95, 74];
const student = {
  name: "Asratul Hasan Nahid",
  age: 17,
  designation: ["Programmer", "Reels Manager"],
};

/* 1. Template String */
const about = `My name is ${student.name} age of ${student["age"]} has number ${numbers[2]} also liked designation ${student.designation[0]}`;
console.log("1. Template String");
console.log(about);

/* 2. Arrow Function */
const nahid = () => "is powerful";
const sumWithANumber = (num) => num + 23;
const isEven = (x) => x % 2 == 1;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};
const firstAndLastName = (firstname, lastname) => {
  const fullName = firstname + " " + lastname;
  return fullName;
};
console.log("2. Arrow Function");
console.log(nahid());
console.log(sumWithANumber(23));
console.log(isEven(24));
console.log(addThree(2, 5, 3));
console.log(doMath(6, 6));
console.log(firstAndLastName("Nahid", "Hasan"));

/* 3. Spreed Operation */
// 3.1 Spreed Explain: spreed operation diye amra akti array ke clone ba copy korte pari
const mainArray = [45, 21, 83, 51, 95];
const newMainArray = [...mainArray];
// create a new array from an older array and add an element
const currentMainArray = [...mainArray, 96];
mainArray.push(33);
newMainArray.shift();
console.log("3. Spreed Operation");
console.log("Main Array", mainArray);
console.log("New Main Array", newMainArray);
console.log("Current Main Array", currentMainArray);
