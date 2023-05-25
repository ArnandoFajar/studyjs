
/** mencari posisi string di awal kalimat */ 
var str = "Please locate where 'locate' occurs!";
// var hasil = str.indexOf("locate");
// console.log(hasil);

/** mencari posisi string di akhir kalimat */ 
var str = "Please locate where 'locate' occurs!";
// var hasil = str.lastIndexOf("locate")
// console.log(hasil);

/** mencari */  
var str = "Please locate where 'locate' occurs!";
// var hasil = str.search("locate");
// console.log(hasil)

/** mencocokan like regexp */ 
var str = "The rain in SPAIN stays mainly in the plain";
// var hasil = str.match(/ain/gi);
// console.log(hasil)

/** The includes() method returns true if a string contains a specified value.
Otherwise it returns false. */
var text = "Hello world, welcome to the universe.";
// var hasil = text.includes("hello");
// console.log(hasil);

/** The startsWith() method returns true if a string begins with a specified value. */
var text = "Hello world, welcome to the universe.";
// var hasil = text.startsWith("world",6);
// console.log(hasil);

/** The endsWith() method returns true if a string begins with a specified value. */
var text = "Hello world, welcome to the universe.";
var hasil = text.endsWith("universe.");
console.log(hasil);


