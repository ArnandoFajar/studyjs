const person = {
    firstName : "john",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
}

const getFullName = person.fullName();

//two ways call
console.log(person.age);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.eyeColor);
console.log("\n");
console.log(person["lastName"]);
console.log("\n");
console.log(getFullName);
