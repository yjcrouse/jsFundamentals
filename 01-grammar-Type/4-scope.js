var x = 12;

function scope() {
    //Declaration       Initialization
    var x = 33;
    console.log(x);
}

scope();
console.log(x);


// Var vs. Let

var y = 12;

function varlet() {
    var y = 33;
    if (true) {
        let y = 45;
        console.log(y);
    }
    console.log(y);
}

varlet();
console.log(y);

//Let key word instead of var simply allows a new variable to be delivered at the specific scope*/

function constTest() {
    const scope = 1;
    if (true) {
        const scope = 2;
        console.log(scope)
    }
    console.log(scope)
}