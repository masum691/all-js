// 1. array destructuring
const numbers = [23, 54];
// const [x, y] = [23, 54]
const [x, y] = numbers;

function getValues (num1, num2 ){
    const nums = [num1 , num2];
    return nums;
}
const [first, second] = [67,34];
console.log(x, y);
console.log(getValues(45,34));


// object destructuring
const {name, price}= {name: 'mobile', price: 2322}
console.log(name, price);

const employee = {
    ide: 'vs code',
    designation: 'developer',
    machine: 'windows',
    language: ['js', 'java', 'php'],
    specification: {
        address: 'mymensingh',
        weight: 77
    }
}
const {machine, ide} = employee;
const {weight, address} = employee.specification;
console.log(address);