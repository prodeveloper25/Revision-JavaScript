/* Array Of Object */
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
  {
    name: "Pixel 9 Pro",
    price: 932,
    brand: "Google",
    color: "black",
  },
  {
    name: "HeadSet",
    price: 739,
    brand: "LogiTech",
    color: "white",
  },
];
console.log("1. Array Of Object");
console.log(products);

/* 2. Map */
// 2.1 Map holo kichuta loop er moto jeta amader array theke kichu return kore
const brands = products.map((product) => product.brand);
const prices = products.map((product) => product.price);
console.log("2. Map");
console.log(brands);
console.log(prices);

/* 3. forEach */
// 3.1 forEach holo kichuta map er moto but forEach amaderke kichu return kore she directly loop kore fele
console.log("3. forEach");
products.forEach((product) => console.log(product));
products.forEach((product) => {
  const prices = "price" + " " + product.price;
  console.log(prices);
});

/* 4. Filter */
// 4.1 filter: amra jodi kichu filter kori tokhon filter jegulor sathe amader dewa shoro match kore she segulor return kore
const cheapProduct = products.filter((product) => product.price <= 900);
const specificName = products.filter((product) => product.name.includes("t"));
console.log("4. Filter");
console.log(cheapProduct);
console.log(specificName);

/* 5. Find */
// find holo amader shorto dewa jegulor sathe match kore she shekhan theke prothom ta return kore
const specialName = products.find((product) => product.name.includes("t"));
console.log("4. Find");
console.log(specialName);
