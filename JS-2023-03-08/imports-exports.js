// import { x, suma } from './exports/variables.js'
// console.log(x)

// console.log(suma)

import { sum as sum3} from './exports/variables.js';
import { sum } from './exports/functions.js';
import {vaisiai, automobiliai} from './exports/objects.js';


// console.log(sum(12,18))
// console.log(sum3(12,18,15))
console.log(vaisiai)

const { citrinos, vynuoges } = vaisiai;

console.log(citrinos)
console.log(vynuoges)

console.log(automobiliai)

const [pirmas, antras, trecias] = automobiliai;

console.log(pirmas)