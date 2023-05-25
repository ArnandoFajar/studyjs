//for each 
const numbers = [45, 4, 9, 16, 25];
let txt = "";
function myFunction(value) {
txt += value + "\n";
}
const foreachContoh = numbers.forEach(myFunction);
console.log(txt);

// map
const numbers1 = [45, 4, 9, 16, 25];
//jika fungsi dijadikan arrow function
const numbers2 = numbers1.map((value,index,Array) => {
    return value;
})
console.log(numbers2);

//array filter

const numbers3 = [45, 4, 9, 16, 25];
const over18 = numbers.filter((value,index,array) => {
    return value > 18;
});
console.log(over18);

//reduce(dari kiri)

const numbers4 = [45, 4, 9, 16, 25];
let sum = numbers.reduce((total, value, index, array) => {
    return total + value;
},30);
console.log(sum);

//reduce (dari kanan)
const numbers5 = [45, 4, 9, 16, 25];
let sum2 = numbers.reduceRight((total, value, index, array)=>{

    return total + value;
});
console.log(sum2);

// The every() method checks if all array values pass a test.
const numbers6 = [45, 4, 9, 16, 25];
let allOver18 = numbers.every((value, index, array) => {
    return value > 18;
  });

console.log(allOver18);

// The some() method checks if some array values pass a test.
const numbers7 = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18);

// The indexOf() method searches an array for an element value and returns its position.
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Mango");
console.log(position);

// The find() method returns the value of the first array element that passes a test function.
const numbers8 = [4, 9, 16, 25, 29];
let first = numbers8.find((value, index, array) => {
    return value > 18;
  });
console.log(first);

// The findIndex() method returns the index of the first array element that passes a test function.
const numbers9 = [4, 9, 16, 25, 29];
let firstFindIndex = numbers9.findIndex((value, index, array) => {
  return value > 18;
});
console.log(firstFindIndex);

// The Array.from() method returns an Array object from any object with a length property or any iterable object.
var arrayForm = Array.from("Aku Mau Makan");
console.log(arrayForm);

// The Array.keys() method returns an Array Iterator object with the keys of an array.
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits2.keys();
var text='';

for (let x of keys) {
   text += x + " ";
}
console.log(text);

// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
var hasil = fruits3.includes("Mango"); // is true
console.log(hasil);

// The ... operator expands an iterable (like an array) into more elements:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year); 
// console.log(...q1);

q1.forEach(value => {
  console.log(value);
});

for(value of q1){
  console.log(value);
}