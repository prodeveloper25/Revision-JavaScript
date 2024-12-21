/* 1. Array Destructuring */
const numbers = [23, 85];
// const x = numbers[0];
// const y = numbers[1];
const [x, y] = numbers;
function boxify(num1, num2) {
  const [x, y] = [num1, num2];
  console.log("Function Values", x, y);
}
const boxifyInArrowFunction = (num1, num2) => {
  const [x, y] = [num1, num2];
  console.log("Arrow Function Values", x, y);
};
function boxifyWithDestructuring(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
const [first, second] = boxifyWithDestructuring(27, 40);
const student = {
  name: "Asratul Hasan Nahid",
  age: 17,
  designation: ["Programmer", "Reels Manager"],
};
const [firstDesignation, lastDesignation] = student.designation;
console.log("1. Array Destructuring");
console.log(x, y);
boxify(34, 87);
boxifyInArrowFunction(12, 73);
console.log(first, second);
console.log(firstDesignation, lastDesignation);

/* 2. Object Destructuring */
const objectDestructuring = { name: "alu", age: 13 };
const { name, age } = objectDestructuring;
const employee = {
  ide: "VS Code",
  designation: "Developer",
  machine: "Windows",
  languages: ["HTML", "CSS", "JavaScript"],
  specification: {
    height: 66,
    weight: 43,
    address: "Lakshmipur",
    drink: "Water",
    watch: {
      WatchBrand: "Apple",
      WatchColor: "black",
    },
    bag: {
      bagSize: 76,
      bagColor: "white",
    },
  },
};
const { ide, machine } = employee;
const { height, address } = employee.specification;
const [itemOne, itemTwo] = employee.languages;
const { WatchBrand, WatchColor } = employee.specification.watch;
// optional chaining like this ?
const { bagSize, bagColor } = employee?.specification?.bag;
console.log("2. Object Destructuring");
console.log("Operation 1 -", name, age);
console.log("Operation 2 -", ide, machine);
console.log("Operation 3 -", height, address);
console.log("Operation 4 -", itemOne, itemTwo);
console.log("Operation 5 -", WatchBrand, WatchColor);
console.log("Operation 6 -", bagSize, bagColor);
