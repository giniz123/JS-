// array

// let fruit = "apple";
// const fruits = ["apple", "banana", "orange", "pear"];

// console.log(fruits[3]);
// fruits[1] = "mango";
// console.log(fruits);

// console.log(fruits.toString());

// // console.log(fruits.length);

// const length = fruits.length;
// const result = fruits[length];

// console.log(length);
// console.log(result);

// console.log(fruits[fruits.length - 1]);

// console.log(typeof fruits);

// console.log(Array.isArray(fruits));

// For Loops

// printing hello world 10 times

// const world = "Hello World ";

// for (i = 0; i < 10; i++) {
//   console.log(world, i);
// }

// initiating multiple expression in for loop

// for (i = 0, j = 9; i < 10, j > 0; i++, j--) {
//   console.log(i, j);
//   console.log(`${i}${j}`);
// }

// While loops
// let index = 0;

// while (index < 10) {
//   console.log(`The number of index is ${index}`);
//   index;
// }
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let j = 1;
// while (j <= 10) {
//   console.log(`hello world ${j}`);
//   j++;
// }

// k = 1;
// do {
//   console.log(k);
//   k++;
// } while (k < 10);

// const fruits = ["apple", "banana", "orange", "mango", "pear"];
// const vegetabkes = ["cauli", "brocoli", "peas", "cabbage", "potato"];
// const meat = ["chicken", "pork", "goat", "beef", "buff"];

// console.log(fruits.pop());
// console.log(fruits);

// const removedItem = fruits.shift();
// console.log(removedItem);
// console.log(fruits);

// const newItem = fruits.unshift("grapes");
// console.log(fruits);

// const fruitAndVegies = fruits.concat(vegetabkes);
// const fruitVegeMeat = fruits.concat(vegetabkes, meat);
// console.log(fruitAndVegies);
// console.log(fruitVegeMeat);

// const fruits = [
//   "watermelon",
//   "papaya",
//   "apple",
//   "banana",
//   "orange",
//   "mango",
//   "pear",
// ];

// fruits.push("watermelon");

// fruits.unshift("watermelon");

// console.log(fruits);

// console.log(fruits.pop());
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// const fruitAndVege = fruits.concat(vegetables, meat);
// console.log(fruitAndVege);

// const slicedArray = fruits.slice(2, 5);
// console.log(slicedArray);

// const splicedArray = fruits.splice(2, 3);
// console.log(splicedArray);
// console.log(fruits);

// sorting with sort()

// fruits.sort();
// console.log(sortedArray);

// sorting with toSorted()
// const sortedArray = fruits.toSorted();
// console.log(sortedArray);

// fruits.reverse();
// console.log(fruits);

// const reveredArray = fruits.toReversed();
// console.log(reveredArray);

// const decendedArray = fruits.toSorted().toReversed();
// console.log(decendedArray);

// const numbers = [2, 10, 5, 8, 9, 26, 6, 35, 98, 42, 58, 75];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// for of loop

// const fruits = [
//   "watermelon",
//   "papaya",
//   "apple",
//   "banana",
//   "orange",
//   "mango",
//   "pear",
// ];

// console.log(fruits);

// const newArray = [];

// for (const fruit of fruits) {
//   const result = newArray.push(fruit.toUpperCase());

//   console.log(fruit);
// }

// console.log(newArray);

// const numbers = [10, 20, 30, 40, 50];

// for (const number of numbers) {
//   console.log(number);
// }
// console.log(numbers);

/* ======= Challenge 1- Find the squares of [1,3,5,7,9,
 11,15,19,25] using for of loop */

//  =============== ANSWER ======================

/* const numbers = [1, 3, 5, 7, 9, 11, 15, 19, 25];

for (const number of numbers) {
  const square = number * number;
  console.log(square);
}             */

/* =========== Challenge 2- Find the highest salary of an
office where salary list is [25000, 35000, 15000, 36000,
28000, 75000, 50000] using for of loop */

//  =============== ANSWER ======================

/* const salaries = [25000, 35000, 15000, 36000, 28000, 75000, 50000];

let highestSalary = 0;
for (const salary of salaries) {
  if (highestSalary < salary) {
    highestSalary = salary;
  }
}
console.log(highestSalary);             */

/* ============= Challenge 3- Find the sum of weight of all the people 
going inside a lift for safety purpose. The weights are [75, 60, 45,55,
59,89,75,96,50,60] */

//  =============== ANSWER ======================

/* const weights = [75, 60, 45, 55, 59, 89, 75, 96, 50, 60];

let totalWeight = 0;

for (const weight of weights) {
  totalWeight = weight + totalWeight;
  // totalWeight += weight
}
console.log(totalWeight); */

// forEach()

// const fruits = ["banana", "apple", "peach", "mango", "grapes"];

// fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });

// const numbers = [10, 20, 30, 40, 50];

// numbers.forEach((number, index) => {
//   console.log(index, number);
// });

/* ============= Challenge 1- Greet every friends in the list with "Hello" 
- ["Sita", "Ram", "Gita", "Shyam", "Krishna", "Raghav"] */

//  =============== ANSWER ======================

// const friends = ["Sita", "Ram", "Gita", "Shyam", "Krishna", "Raghav"];

// friends.forEach((friend, index) => {
//   console.log(`${index} Hello ${friend}`);
// });

/* ============= Challenge 2- Calculate discount amount(10%) on each items 
[450, 300, 5000, 2500, 8500, 6800, 2300, 45000] */

//  =============== ANSWER ======================

/* const items = [450, 300, 5000, 2500, 8500, 6800, 2300, 45000];

items.forEach((item) => {
  const discount = item / 10;
  const newItem = item - discount;
  console.log(discount);
}); */

/* ============= Challenge 2- Print only even numbers from list [1, 2,
3, 4 ,5 ,6, 7, 8, 9, 10, 11, 12] */

//  =============== ANSWER ======================

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// numbers.forEach((number, index) => {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
// });

// Map()

// const numbers = [1, 2, 3, 4, 5];

// const doubled = numbers.map((number, index) => {
//   return number * 2;
// });

// const doubled = numbers.map((number, index) => number * 2);

// console.log(doubled);

/* ================ Challenge -1 Put Rs. in front of all the prices
[520, 250, 900, 150, 6000, 1000, 600, 8000, 70000, 16000] */

/* ==================== ANSWER ========================== */

// const prices = [520, 250, 900, 150, 6000, 1000, 600, 8000, 70000, 16000];

// const rsPrices = prices.map((price, index) => `Rs. ${price}`);
// console.log(rsPrices);

/* ================ Challenge -2 Changing strings to uppercase ["javascript",
"github", "laptop", "coding", "frontend", "backend", "react", "project",
"developer"] */

// const strings = [
//   "javascript",
//   "github",
//   "laptop",
//   "coding",
//   "frontend",
//   "backend",
//   "react",
//   "project",
//   "developer",
// ];

// const newString = strings.map((string, index) => string.toUpperCase());

// console.log(newString);

/* ================ Challenge -3 Add .com to company name ["google", "microsoft",
"apple", "samsung", "tiktok", "facebook", "twitter", "amazon", "netflix"]

/* ==================== ANSWER ========================== */

// const companies = [
//   "google",
//   "microsoft",
//   "apple",
//   "samsung",
//   "tiktok",
//   "facebook",
//   "twitter",
//   "amazon",
//   "netflix",
// ];

// const newCompanies = companies.map((company, index) => `${company}.com`);
// console.log(newCompanies);

/* ================ Challenge -4 Find the price after 10% discount [520, 250,
900, 150, 6000, 1000, 600, 8000, 70000, 16000] */

/* ==================== ANSWER ========================== */

// const prices = [520, 250, 900, 150, 6000, 1000, 600, 8000, 70000, 16000];

// const discountedPrices = prices.map((price, index) => {
//   return (price = price - (price * 10) / 100);
// });

// console.log(discountedPrices);

// filter()

/* ================ Challenge -1 Filter along with examination marks example
[56,78,94,68,32,15,16,85,47,69,68,78,99,83,74,76,36,25,38,27,16,8,6] */

/* ==================== ANSWER ========================== */

// const marks = [
//   56, 78, 94, 68, 32, 15, 16, 85, 47, 69, 68, 78, 99, 83, 74, 76, 36, 25, 38,
//   27, 16, 8, 6,
// ];

// const passed = marks.filter(
//   (mark, index) =>
// if (mark >= 40) {
//   return true;
// }

//     mark >= 40
// );

// const passed = marks.filter((mark, index) => mark >= 40);

// console.log(passed);

/* ================ Challenge -2 FInd all the even numbers from the list 
[1,2,3,4,5,6,7,8,9,10] */

/* ==================== ANSWER ========================== */

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = numbers.filter((number, index) => number % 2 == 0);

// console.log(even);

/* ================ Challenge -2 Find the words that contains 'a' - 
useful in search functionality - ["javascript", "react", "python", 
"c++", "ruby", "rust", "cobol", "java", "php", "laravel", "angular"] */

/* ==================== ANSWER ========================== */

// const programmings = [
//   "javascript",
//   "react",
//   "python",
//   "c++",
//   "ruby",
//   "rust",
//   "cobol",
//   "java",
//   "php",
//   "laravel",
//   "angular",
// ];

// const aContainingProgramming = programmings.filter((programming, index) =>
//   programming.includes("a")
// );

// console.log(aContainingProgramming);

/* ================ Challenge -3 remove all the strings while keeping all the
numbers [10, "hello", 5, "world", 0, "javascript", "react", 85, "php", 962,
78, "react", 56, 45, "angular"] */

/* ==================== ANSWER ========================== */

// const mixArray = [
//   10,
//   "hello",
//   5,
//   "world",
//   0,
//   "javascript",
//   "react",
//   85,
//   "php",
//   962,
//   78,
//   "react",
//   56,
//   45,
//   "angular",
// ];

// const numArray = mixArray.filter((item) => {
//   if (typeof item === "number") {
//     return true;
//   }
// });

// console.log(numArray);

//  Reduce()

// const moneys = [444, 350, 600, 15000, 1700, 42600];

// const sum = moneys.reduce((acc, money) => {
//   return acc + money;
// }, 0);

// console.log(sum);

/* ================ Challenge -1 Multiply all numbers [2,3,4,5,6,7,8,9] */

/* ==================== ANSWER ========================== */

// const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

// const multiplied = numbers.reduce((acc, number) => {
//   return acc * number;
// }, 1);

// console.log(multiplied);

/* ================ Challenge -2 find the maximum numbers [33, 85, 12, 99, 56]
-use ternary and tell later it must be in round bracket as well as we use
a, b instead of acc, value for numbers */

/* ==================== ANSWER ========================== */

// const numbers = [33, 85, 12, 99, 56];

// // const maxNumber = numbers.reduce(
// //   (acc, number) => (number > acc ? number : acc),
// //   0
// // );

// const maxNumber = numbers.reduce((acc, number) =>
//   acc > number ? acc : number
// );

// console.log(maxNumber);

// /* ================ Challenge -3 Join all the words into a sentence- ["I",
// "like", "Javascript"] */

// /* ==================== ANSWER ========================== */

// const words = ["I", "like", "Javascript"];

// const sentences = words.reduce((acc, word) => acc + " " + word);

// console.log(sentences);

// Every()

// const fruits = ["apple", "banana", "orange", "mango"];

// const result = fruits.every((fruit, index) => {
//   return fruit.includes("a");
// });

// console.log(result);

// const numbers = [10, 12, 20, 30, 40, 45, 50];

// const output = numbers.every((number, index) => {
//   return number >= 10;
// });

// console.log(output);

// ========== Includes(), find(), indexOf()

// const money = [300, 400, 250, 500, 555, 560, 6000];

// const result = money.includes(300);

// const result = money.find((amount, index) => amount === 560);

// const result = money.indexOf(500);
// console.log(result);

/* ************************************************************** */

// Challange #1
// 1. create an array of 50 random numbers range between 1 and 100 programmatically
// const array = [];
// for (i = 0; i < 50; i++) {
//   const result = Math.floor(Math.random() * 100) + 1;
//   array.push(result);
// }
// console.log(array);

//2. sort the array in descending order

// array.sort((a, b) => b - a);
// console.log(array);

//3. get total of the array

// const total = array.reduce((acc, num) => {
//   return acc + num;
// }, 0);

// console.log(total);

// 4.Divide original array in to 2 new arrays that contains even or odd numbers only each.

// const evenArray = array.filter((num, index) => num % 2 === 0);
// const oddArray = array.filter((num, index) => num % 2 !== 0);

// 5. remove duplicate number for the original array

// const newArray = [];
// array.filter((num, index) => {
//   if (!newArray.includes(num)) {
//     return newArray.push(num);
//   }
// });

// array.filter((num, index) => {
//   if (newArray.indexOf(num) === -1) {
//     return newArray.push(num);
//   }
// });

// console.log(newArray);

// const newArray = [...new Set(array)];
// console.log(newArray);

// Challange #2 create unique array 50 numbers range between 1 and 100 programmatically

uniqueArray = [];
for (i = 0; uniqueArray.length < 50; i++) {
  const number = Math.floor(Math.random() * 100) + 1;
  if (uniqueArray.indexOf(number) === -1) {
    uniqueArray.push(number);
  }
}

console.log(uniqueArray);
