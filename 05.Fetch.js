/* 1. JSON */
// 1.1 JSON.stringify: stringify sadharon akti object ke she stringify kore dei like this  {"name":"Nahid"}
// 1.2 JSON.parse: parse stringify object ke sadharon object kore dei
const student = {
  name: "Asratul Hasan Nahid",
  age: 17,
  designation: ["Programmer", "Reels Manager"],
};
const studentJSON = JSON.stringify(student);
const studentObject = JSON.parse(studentJSON);
console.log("1. JSON");
console.log("Operation 1 -", student);
console.log("Operation 2 -", studentJSON);
console.log("Operation 3 -", studentObject);

/* 2. Fetch */
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("2. Fetch");
//     console.log("Operation 1 -", data);
//     fetchData(data);
//   });
// const fetchData = (data) => {
//   console.log("Operation 2 -", data);
// };

/* 3. Object Keys & Values */
const myDetails = {
  name: "Asratul Hasan Nahid",
  age: 17,
  designation: ["Programmer", "Reels Manager"],
};
const objectKeys = Object.keys(myDetails);
const objectValues = Object.values(myDetails);
console.log("3. Object Keys & Values");
console.log("Operation 1 Keys -", objectKeys);
console.log("Operation 1 Values -", objectValues);

/* 4. forEach & Map */
const numbersArray = [23, 56, 73, 90];
console.log("4. forEach & Map");
numbersArray.forEach((num) => console.log("Operation 1 -", num));
const numbersArrayWithMap = numbersArray.map((num) => num * 2);
console.log("Operation 2 -", numbersArrayWithMap);
// for of on array like object
// loop on an object using for in

/* 5. Add or Remove From an Array */
const products = [
  {
    name: "laptop",
    price: 3200,
    brand: "Lenovo",
    color: "silver",
  },
  {
    name: "MacBook",
    price: 423,
    brand: "Apple",
    color: "white",
  },
  {
    name: "Iphone",
    price: 854,
    brand: "Apple",
    color: "black",
  },
  {
    name: "Desktop",
    price: 753,
    brand: "Toshiba",
    color: "silver",
  },
];
const newProduct = {
  name: "webcam",
  price: 331,
  brand: "LogiTech",
  color: "Black",
};
// copy products array and then add new product
const newProducts = [...products, newProduct];
// create a new array without one specific item, remove specific item or phones means create a new array without the specific item or phones
const remaining = products.filter((product) => product.name !== "Iphone");
console.log("5. Add or Remove From an Array");
console.log("Main Products Array -", products);
console.log("Operation 1 -", newProducts);
console.log("Operation 2 -", remaining);
