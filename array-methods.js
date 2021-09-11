
// 1. array of object
const products = [
    { name: 'laptop', price: 34343, brand: 'Acer', color: 'black' },
    { name: 'smartphone', price: 3343, brand: 'samsung', color: 'gold' },
    { name: 'watch', price: 343, brand: 'chaina', color: 'silver' },
    { name: 'keyboard', price: 1443, brand: 'A4Tech', color: 'RGB' }
];

// map and forEach
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);

products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {

})

// 3. filter
const cheap = products.filter(product => product.price <= 4000);
console.log(cheap)

const specificName = products.filter(product => product.name.includes('w'));
console.log(specificName);

// 4. find
const special = products.find(p => p.name.includes('k'));
