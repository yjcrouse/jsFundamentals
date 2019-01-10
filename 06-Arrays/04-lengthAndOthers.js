let long = [1,2,3,4,5,6,7,8,9,10]

console.log(long.length)

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple']

console.log(colors.length)
console.log(colors.toString())
console.log('*******New Console.log() ********')

colors.forEach( f => {console.log(f)})


let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple']

console.log( colors instanceof Array)
colors.splice(4,0, 'red' )
