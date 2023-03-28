// console.log('%c Hello', 'color:skyblue;')


// console.log([...Array(10)].map(_ => Math.floor(Math.random() * 11 + 1)));

var a = 5;

const m = [];

for(let i = 0; i <10; i++){
    m.push(Math.floor(Math.random() * 11 + 1))
}

console.log(m);

let A = 5;

A = '' + A;

console.log(typeof A);

A = +A;

console.log(typeof A);

A = !!A;

console.log(typeof A, A);

A = +A;

console.log(typeof A, A);


const B = 10;

if(0 === true){
    console.log('Jo')
} else {
    console.log('Ne')
}