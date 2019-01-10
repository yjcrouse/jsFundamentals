var listOfHotPeppersEatenByContestants = [3, 4, 2, 10, 3, 5];
​
//Prints out the length of the array
console.log(listOfHotPeppersEatenByContestants.length); //6
​
​
listOfHotPeppersEatenByContestants[listOfHotPeppersEatenByContestants.length] = 12; //[3, 4, 2, 10, 3, 5, 12]
//You can append the array like this:
console.log(listOfHotPeppersEatenByContestants.length); //7
​
​
//PUSH is easier though
listOfHotPeppersEatenByContestants.push(21); //[3, 4, 2, 10, 3, 5, 12, 21]
console.log("7 is now the last spot: " + listOfHotPeppersEatenByContestants[7]);
​
console.log(listOfHotPeppersEatenByContestants.length); //8
​
//Removing an element from the array
listOfHotPeppersEatenByContestants.pop(); //[3, 4, 2, 10, 3, 5, 12]
console.log(listOfHotPeppersEatenByContestants.length); //7


let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake','Hotdog'];


for(f in food){
    console.log(food[f])
}

food.push('Pizza');

food.splice(1,1, 'Bananas')

food.splice(4,1);

food.pop();
console.log(food)

