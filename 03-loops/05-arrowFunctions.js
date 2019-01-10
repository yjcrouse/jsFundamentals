// nicknamed: FAT ARROW FUNCTIONS

function coffee() {
    console.log("Coffee is life!")
}

let coffee = () => {
    console.log("Coffee is cool");
}

coffee();


var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`);
}

cats(1, 35);


let fatArrows = (x) => 
        {console.log(x);}

fatArrows("This is a function, nothing to see")

let namingMachine = (fname,lame) => (fname)




let score = "Winner";

function uppercase(big){
    return big.toUpperCase();
}
 function lowerCase(small) {
     return small.toLowerCase();
 }

 console.log(lowerCase(upperCase(score)))




