// truthy - ' ', 'masum', true, {}, []
// falsy - '', false, null, undefined

// check truthy
let myVar = 3;
if(myVar){
    myVar = myVar * 5;
}
else{
    myVar = 0
}

let myMoney = 898;
// check negative or falsy anything
if(!myMoney){

}

const money = 34;
let food;
if(money > 100){
    food = 'biriany'
}
else{
    food = 'tea'
}

// ternary
let foodOne = money > 100 ? 'biriany' : 'tea';

let drink = (money > 200 && myVar > 200) ? 'coke' : 'water';
console.log(drink);


// number to string
const numOne = 56;
const numString = numOne + '';
console.log(numOne);
console.log(numString);

// string to number
const input = '453';
console.log(input)
console.log(+input);


// 
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();
isActive || hideUser();


// toggle boolean
isActive = !isActive;
