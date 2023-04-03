class Animal {

    static forest = 'B I G';

    constructor(age) {
        this.color = 'yellow';
        if(!age) {
            throw new Error ('Animal needs age!')
        } else {
            this.age = age;
        }
        
    }

    printColor() {
        console.log('%c ' + this.constructor.forest + ' ', 'background-color:' + this.color + ';')
    }

}

const animal1 = new Animal(20);
const animal2 = new Animal(17);

animal1.color = 'pink';

Animal.forest = 'small'

// animal2.printColor();
// animal1.printColor()

// console.log(animal1, animal2);

// console.log(Animal.forest)

// ------------- ///// -------------------

// 1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę 
// akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, 
// pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) 
// ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
// Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į 
// kibirą ir rezultatų išvedimą.


// 7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti 
// metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą 
// visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose 
// Kibiras objektuose). Skaičiuoti akmenim, naudokite statine savybe
// visiAkmenys (kurioje yra 
// įrašytas ir saugomas bendras akmenų skaičius). Taip pat 
// atitinkamai modifikuokite metodus prideti1Akmeni(),  
// pridetiDaugAkmenu(kiekis).

class Kibiras1 {

    static visiAkmenys = 0; // 7

    static AKVK() {
        console.log('AKVK', this.visiAkmenys); // 7
    }
    
    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
        this.constructor.visiAkmenys++; // 7
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        this.constructor.visiAkmenys += kiekis; //7
    }

    kiekPririnktaAkmenu() {
        console.log(this.akmenuKiekis)
    }

    akmenuSkaiciusVisuoseKibiruose(){
        console.log(this.constructor.visiAkmenys) //7
    }

}

const k1 = new Kibiras1();
const k2 = new Kibiras1();
const k3 = new Kibiras1();

k1.prideti1Akmeni();
k3.pridetiDaugAkmenu(8);

k3.prideti1Akmeni();
k3.prideti1Akmeni();

k1.kiekPririnktaAkmenu();
k2.kiekPririnktaAkmenu();
k3.kiekPririnktaAkmenu();

k2.akmenuSkaiciusVisuoseKibiruose(); //7

Kibiras1.AKVK() //7



