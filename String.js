let lima = 5*5;

/**
 * cara membuat perkalian
 * @param {float} x 
 * @param {int} y  
 * @return  
 */
const fungsi = (x,y) => {
    return x*y;
} 

const object = {
    firstName : "arnando",
    secondName : "fajar",
    lastName : "sidhiq"
}

const nama = object.firstName + " " + object.secondName + " " + object.lastName;
const panjangChar = object.firstName.concat(object.secondName + " " + object.lastName);
const upperCase = object.firstName.split("d");

console.log(panjangChar);