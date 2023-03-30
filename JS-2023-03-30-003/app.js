const animal = {
    name:'bobikas',
    tail: 'short',
    likesSing: false,
    color: {
        hex: '#45d5c5',
        light: true,
        hasSpots: false
    }
};

const what = 'name';

// console.log(animal[what]);

// for(const props in animal){
//     console.log(animal[props])
// }

const arr = [
    'pink',
    'blue',
    'crimson',
    'coral',
    'coral'
];

// console.log(arr[1])

for(let i = 0; i < arr.length; i++){
    // console.log(`%c ${arr[i]}`, `background-color: ${arr[i]}`)
}

// const FE = arr.forEach((c) => console.log(c));

// console.log(FE)

// console.log('---')

const MAP = arr.map(c => c === 'coral' ? 'black' : c);

// console.log(MAP)

const arr1 = [
    { id: 5, color: 'pink', long: true },
    { id: 75, color: 'blue', long: true },
    { id: 56, color: 'yellow', long: false },
    { id: 75, color: 'pink', long: true },
    { id: 522, color: 'crimson', long: false }
];

const MAP1 = arr1.map(c => ({...c, color:'black' }) ); //pakeitem visas spalvas

// console.log(MAP1)

const MAP2 = arr1.map(c => c.color === 'pink' ? {...c, color:'black' } : c ); //pakeitem tik pink

// console.log(MAP2)

const MAP3 = arr1.map(c => ({...c, long: !c.long, id: ++c.id, new: 'Hello' }) );

// console.log(MAP3)

const arr2 = [
    { id: 5, color: 'pink', long: false },
    { id: 75, color: 'blue', long: true },
    { id: 56, color: 'yellow', long: false },
    { id: 75, color: 'pink', long: true },
    { id: 522, color: 'crimson', long: false }
];

const FIND = arr2.find(c => c.color === 'yellow')

// console.log(FIND)

const FIND1 = arr2.find(c => c.long && c.color === 'pink')

// console.log(FIND1)

// FIND1.color = 'BLUE'

// console.log(arr2)

const arr3 = [
    { id: 5, color: 'pink', long: false },
    { id: 75, color: 'blue', long: true },
    { id: 56, color: 'yellow', long: false },
    { id: 75, color: 'pink', long: true },
    { id: 522, color: 'crimson', long: false }
];

// const FILT = arr3.filter(c => c.color === 'pink')

// console.log(FILT)

// const DELETE = arr3.filter(c => c.id !== 75)

// console.log(DELETE)

const FM = arr3.filter(c => c.color !== 'pink').map(c => ({...c, color: 'black'}));

// console.log(FM)

const arr4 = [
    { id: 5, color: 'pink', long: false },
    { id: 75, color: 'blue', long: true },
    { id: 56, color: 'yellow', long: false },
    { id: 75, color: 'pink', long: true },
    { id: 522, color: 'crimson', long: false }
];

const start = 0;

const BIG = arr4.reduce((result, c) => c.id > result ? c.id : result, start); // ieskom didziausio ID

const PINK = arr4.reduce((result, c) => c.color === 'pink' ? ++result : result, start); //ieskom PINK

// console.log(BIG)

// console.log(PINK)

const arr5 = [
    { id: 5, color: 'pink', long: false },
    { id: 75, color: 'blue', long: true },
    { id: 56, color: 'yellow', long: false },
    { id: 75, color: 'Pink', long: true },
    { id: 522, color: 'crimson', long: false }
];

arr5.sort((a,b) => {
    if (a.id > b.id) return 1; // jei nuo didziausio iki maziausio, tada -1
    if (a.id < b.id) return -1; // 1
    return 0;
})

arr5.sort((a,b) => a.id - b.id) // nuo didziausio b.id - a.id

arr5.sort((a,b) => {
    if (a.color > b.color) return 1; // jei nuo paskutines raides iki pirmos, tada -1
    if (a.color < b.color) return -1; // 1
    return 0;
})

arr5.sort((a,b) => a.color.localeCompare(b.color)) // priesingai b.color.localeCompare(a.color)



// console.log(arr5)
