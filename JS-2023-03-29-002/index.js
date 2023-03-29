



function randomColor() {
   return '#' + Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0');

}

const result = randomColor;

const result2 = result();

// console.log(typeof result)

// console.log(result2)


// function fun() {
//     console.log("%cfun", 'color:'+randomColor()+';')
// }

// function fun() {
//     console.log('bla bla')
// }

// const kemDu = 42;

// const fun = function(param, k = ' ----') {
//     console.log("%c" + param + k, 'color:'+randomColor()+';')
// }



// fun('Labas', kemDu)
// fun('kaip tu', kemDu)
// fun('Zuiki')

const fun = function(param) {
    console.log("%c" + param, 'color:'+randomColor()+';')
}

const moreFun = (param) => {
    console.log("%c" + param, 'color:'+randomColor()+';')
}

const moreAndMoreFun = param => console.log("%c" + param, 'color:'+randomColor()+';');

const callFun = (callBack) => {
    const symbols = '*';
    console.log("%c" + callBack(symbols), 'color:'+randomColor()+';');
}


const doText = (what) => {
    return [...Array(1000)].join(what);
}

// fun('Labas')
// fun('kaip tu')
// fun('Zuiki')

// moreFun('gerai')
// moreAndMoreFun('labai')

// // callFun(doText, '-');

// callFun(what => [...Array(1000)].join(what));

const animals = [
    'Racoon',
    'Rabbit',
    'Fox'
];

const inerate = (cb, arr) => {
    for (let i = 0; i < arr.length; i++){
        cb(arr[i]);
    }
}

// inerate(fun, animals);

Array.prototype.doFun = function(cb) {
    for (let i = 0; i < this.length; i++){
        cb(this[i]);
    }
}

// animals.doFun(a => console.log(a));
// animals.forEach(a => console.log(a));


//keywords

//rest, spread, ref or value, destruc

let A = 5;
let B = A; // A value 5

A++

// console.log(A, B)

let C = [5];
let D = C; // C ref

C[0] ++;
D[0] ++;

// console.log(C, D);

let E = [5];
let F = [...E]; // make copy

E[0] ++;

// console.log(E, F);

const structure = [4, 6, 88, 7];

// console.log([...structure]);
// console.log({...structure});
// console.log('B', ...structure, 'A');

const obj = {
    color: 'skyblue',
    name: 'Rex',
    big: true
}

// console.log({...obj});

// // obj.color = 'crimson';
// // console.log(obj);

// console.log({...obj, tractor:42, color:'crimson'});

const sum = (...args) => {
    console.log(args);
}

// sum(4,8);
// sum(5, 10, 10, 10, 14);

// const { color, name } = obj; // objekto destrukcija

// console.log(color, name);

// const [a1, a2] = animals;

// console.log(a1, a2)

// const ter = 4 > 1 ? 'Yes' : 'Nop';

// console.log(ter)

// const ter1 = 0 ? 'Yes' : 'Nop';

// console.log(ter1)

// abc = 50

// const ter2 = abc < 50 ? 'iki 50' : (abc < 70 ? 'iki 70' : 'virs 70');

// console.log(ter2)

// const g = () => console.log('big');
// const j = () => console.log('small');
   

// abc ? g() : j();
//    true  false

const g = () => {
    console.log('big');
    return 0;
}
const j = () => {
    console.log('small');
    return 1;
} 

const z = () => {
    console.log('zuper');
    return 0;
}

// g() || j() || z() // grazina pirma TRUE reiksme, jei nors vienas yra TRUE

// g() && j() && z() // grazina TRUE, jei abu TRUE


let rez;

let print = rez || 'no result';

console.log(print)