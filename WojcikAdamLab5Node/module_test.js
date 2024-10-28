// ZADANIE 1. Przelicznik walut.

const currency1 = require('./currency1');
const Currency = require('./currency2');
let USD = 4.02; // kurs dolara do PLN
let EUR= 4.35; // kurs euro do PLN
let GBP= 5.22; // kurs funta do PLN
let JPY= 0.026; // kurs jena do PLN
let CHF= 4.64; // kurs franka szwajcarskiego do PLN
let currency2 = new Currency(USD, EUR, GBP, JPY, CHF);

let amount = 50;

console.log('Przelicznik walut na PLN:');
console.log('(na podstawie currency1 - referencja do obiektu export)\n');
console.log('50 USD = ' + currency1.USDToPLN(amount) + ' PLN');
console.log('50 EUR = ' + currency1.EURToPLN(amount) + ' PLN');
console.log('50 GBP = ' + currency1.GBPToPLN(amount) + ' PLN');
console.log('50 JPY = ' + currency1.JPYToPLN(amount) + ' PLN');
console.log('50 CHF = ' + currency1.CHFToPLN(amount) + ' PLN');

console.log('\n\nPrzelicznik walut na PLN:');
console.log('(na podstawie currency2 - podejście obiektowe)\n');
console.log('50 USD = ' + currency2.USDToPLN(amount) + ' PLN');
console.log('50 EUR = ' + currency2.EURToPLN(amount) + ' PLN');
console.log('50 GBP = ' + currency2.GBPToPLN(amount) + ' PLN');
console.log('50 JPY = ' + currency2.JPYToPLN(amount) + ' PLN');
console.log('50 CHF = ' + currency2.CHFToPLN(amount) + ' PLN');