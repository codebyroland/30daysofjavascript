'use strict'

let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((element) => console.log(element.toUpperCase()));

const numbers3 =[1, 2, 3, 4, 5];
const numbersSquare = numbers3.map((num) => num * num);

console.log(numbersSquare);

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

const countries1 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const countriesToUpperCase = countries1.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

const countriesContainingLand = countries1.filter((country) => 
country.includes('land'))