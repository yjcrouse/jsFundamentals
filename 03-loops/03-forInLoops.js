var student = { name: "Harry", awesome: true, degree: "JavaScript", week: 1 };

for (item in student) {
    console.log(student[item])
}

var pieArray = ['cherry', 'appple', 'chocolate peanut butter','chicken pot',];
for (pie in pieArray) {
    console.log(pie);
}

var studentName = 'hArRy';
var capName;
for(let n in studentName) {
    if (n == 0) {
        capName = studentName[n].toUpperCase();
    }else{
        capName += studentName[n].toLowerCase();
    }
}
console.log(capName);