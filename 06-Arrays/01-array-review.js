let newArray = ["green","blue","yellow"];
newArray.push("purple"); 
newArray.pop("purple");

newArray.unshift("red");
newArray.shift("red");

newArray[0] = "green"

let list = ['ortange', , true, 28];

console.log(list[1]);

let  students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']]
    

console.log(typeof students);
console.log(students instanceof Array);
console.log(students[6][1])


let name = students[6][2];
console.log(`Hello ${Amira}, you look nice today.`)