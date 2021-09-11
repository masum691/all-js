// 1. JSON - (stringify , parse)

const student = {
    name: 'Masum hossain',
    age: 21,
    address: ['Mymensingh', 'Bangladesh']
}
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch 
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data))

// keys , values
const keys = Object.keys(student);
console.log(keys)
const values = Object.values(student);

// for
const numbers = [34,45,23,456,456];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 4);


// for of on array like object
// loop on an object using for in


// add or remove from an array
const products = [
    { name: 'laptop', price: 34343, brand: 'Acer', color: 'black' },
    { name: 'smartphone', price: 3343, brand: 'samsung', color: 'gold' },
    { name: 'watch', price: 343, brand: 'chaina', color: 'silver' },
    { name: 'keyboard', price: 1443, brand: 'A4Tech', color: 'RGB' }
];

const newProduct = {name: 'mouse', price: 455, brand: 'rapoo'};

//copy products array and then add newProduct
const addNewProduct = [...products , newProduct];
console.log(addNewProduct);

// create a new array without one specific item
// remove phone means create a new array withe the phone

const remaining = products.filter(product => products.name !== 'smartphone');
console.log(remaining)
