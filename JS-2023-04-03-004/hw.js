// 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes 
// popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti
// (kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis 
// nedidesnis už 2, tai prideda prie metaliniaiPinigai, 
// jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą 
// skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę 
// popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės 
// objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės 
//kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

class Pinigine {
    
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        this.visiAkmenys = 0;
    }

    ideti(kiekis) {
        if(kiekis <= 2){
            this.metaliniaiPinigai += kiekis
            this.visiAkmenys+= kiekis
        } else {
            this.popieriniaiPinigai += kiekis
            this.visiAkmenys+= kiekis
        }
    }

    skaiciuoti() {
        console.log("Pinigu suma pinigineje:", this.visiAkmenys);
    }
}

const p1 = new Pinigine();

p1.ideti(3);
p1.ideti(1);
p1.ideti(4);


console.log("Popieriniu pinigu suma:", p1.popieriniaiPinigai);
console.log("Metaliniu pinigu suma:", p1.metaliniaiPinigai);
p1.skaiciuoti();


// 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius, 
// kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). 
// O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių 
// keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių 
// skaičius negali.

class Troleibusas {

    constructor() {
        this.keleiviuSkaicius = 0;
        this.vaziuojanciuSk = 0;
    }

    ilipa(skaicius) {
        this.keleiviuSkaicius += skaicius;


        if (this.keleiviuSkaicius < 0){
            this.keleiviuSkaicius = 0;
        }
    }

    islipa(skaicius) {
        this.keleiviuSkaicius -= skaicius;

        if (this.keleiviuSkaicius < 0){
            this.keleiviuSkaicius = 0;
        }     
        
    }

    vaziuoja() {
        console.log
    }
}

const k1 = new Troleibusas()

k1.islipa(3)
k1.ilipa(5)
k1.islipa(2)

console.log(k1.keleiviuSkaicius)

