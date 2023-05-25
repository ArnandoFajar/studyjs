/** To String */
let x = 123;
var coba1 = x.toString();
var coba2 = (123).toString();
var coba3 = (100 + 23).toString();
// console.log(coba1);
// console.log(coba2);
// console.log(typeof coba3);

/** toExponential */
let a = 9.656;
var coba1 = a.toExponential(2);
var coba2 = a.toExponential(4);
var coba3 = a.toExponential(6);
// console.log(coba1);
// console.log(coba2);
// console.log(typeof coba3);

/** toFixed */
let b = 9.656;
var coba1 = a.toFixed(0);
var coba2 = a.toFixed(2);
var coba3 = a.toFixed(6);
// console.log(coba1);
// console.log(coba2);
// console.log(coba3);
// console.log(typeof coba3);

/** toFixed */
let c = 9.656;
var coba1 = a.toPrecision();
var coba2 = a.toPrecision(2);
var coba3 = a.toPrecision(6);
// console.log(coba1);
// console.log(coba2);
// console.log(coba3);
// console.log(typeof coba3);

let d = 123;
var coba1 = x.valueOf();
var coba2 = (123).valueOf();
var coba3 = (100 + 23).valueOf();
console.log(coba1);
console.log(coba2);
console.log(coba3);
console.log(typeof coba3);