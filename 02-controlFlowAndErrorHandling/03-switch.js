

let friend = 'Zach';

switch (friend) {
    case 'Zach':
        console.log('Let\'s go play ultimate!')
        break;
    case 'Ing':
        console.log('So...are you taking me to Belgium?')
        break;
    case 'Adam':
        console.log('I probably have baby clothes for you to borrow')
        break;
    default:
        console.log(`You, ${friend}, are not my friend`)
    
}

let dessert = 'pie';

switch (dessert) {
    case 'pie':
        console.log('Pie, pie me oh my!')
        break;
    case 'cake':
        break;
        console.log('Cake is great!')
        break;
    case 'ice cream':
        console.log('I scream for ice cream!')
        break;
    case 'otherwise':
        default:
        console.log(`${dessert} Not on the menu`)

}


let range = -8

switch (true) {
    case (range < 0 && range > -10):
        console.log('worked')
        break;
    case range >= 0 || range <= -10:
        console.log('also worked')
        break;
    
}
