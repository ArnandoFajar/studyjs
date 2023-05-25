//inisialisasi
const fruits = ['Banana','Orange','Apple','Mango'];

//sort ASC string
// console.log(fruits.sort())

//reversing DESC string
// console.log(fruits.sort());
// console.log(fruits.reverse());

//inisialisasi sort number
const points = [40, 100, 1, 5, 25, 10];

//ASC
// const sort = points.sort(function(a, b){return a - b});
// console.log(sort)

//DESC
// const sort = fruits.sort((a,b)=> b-a);
// console.log(sort);

//experiment (angka tidak bisa disort biasa)
// const sort = points.sort();
// console.log(sort);

//sorting array dengan hasil yang random
// const sort = points.sort(()=> 0.5- Math.random());
// console.log(sort);

//The Fisher Yates Method
// for (let i = points.length -1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i+1));
//     let k = points[i];
//     points[i] = points[j];
//     points[j] = k;
//   }
// console.log(points);

//mencari nilai terbesar dan terkecil

//find max
const myArrayMax = (arr) => {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
}
// console.log(myArrayMax(points));

// find min
const myArrayMin = (arr) =>{
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
}
// console.log(myArrayMin(points));

//sorting object array (number)
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
// var sort = cars.sort((a,b)=> a.year - b.year);
// console.log(sort);

//sorting object array (string)

const sort = cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
// console.log(sort);
