// 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes 
// popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti
// (kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis 
// nedidesnis už 2, tai prideda prie metaliniaiPinigai, 
// jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą 
// skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę 
// popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės 
// objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės 
//kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

// 6. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje 
// yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra 
// piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną 
// atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.

class Pinigine {
    
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
        this.visiPinigai = 0;
        this.monetos1 = 0;
        this.banknotai1 = 0;
    }

    ideti(kiekis) {
        if(kiekis <= 2){
            this.metaliniaiPinigai += kiekis
            this.visiPinigai+= kiekis
            this.monetos1++
        } else {
            this.popieriniaiPinigai += kiekis
            this.visiPinigai+= kiekis
            this.banknotai1++
        }
    }

    skaiciuoti() {
        console.log("Pinigu suma pinigineje:", this.visiPinigai);
    };

    monetos() {
        console.log("monetu skaicius pinigineje:", this.monetos1)
    };

    banknotai() {
        console.log("banknotu skaicius pinigineje:", this.banknotai1)
    };
}

const p1 = new Pinigine();

p1.ideti(3);
p1.ideti(1);
p1.ideti(4);

p1.skaiciuoti();
p1.monetos();
p1.banknotai();


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
        console.log("autobusu vaziuojanciu zmoniu skaicius:", this.keleiviuSkaicius)
    }
}

const k1 = new Troleibusas()

k1.islipa(3)
k1.ilipa(8)

k1.vaziuoja()

// 8. Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas 
// objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu 
// stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. 
// Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas 
// netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę 
// atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 
// 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o 
// mažesnę į dar mažesnę.

class Stikline {

    constructor(turis) {
        this.turis = turis;
        this.kiekis = 0;
    }

    ipilti(kiekis) {
        this.kiekis += kiekis;

        if(this.turis < kiekis)
            this.kiekis = this.turis;
        
        console.log("I stikline ipilame:", kiekis)
    }

    ispilti() {
        let likutis = this.turis - this.kiekis;
        let ispilamasKiekis = this.turis - likutis;
        console.log('ispilame:', ispilamasKiekis)
    }

    stiklinejeYra() {
        console.log('stiklineje yra kiekis:', this.kiekis)
    }
}

const stikline1 = new Stikline(200);
const stikline2 = new Stikline(150);
const stikline3 = new Stikline(100);

stikline1.ipilti(200);
stikline1.stiklinejeYra();
stikline1.ispilti();

stikline2.ipilti(200)
stikline2.stiklinejeYra();
stikline2.ispilti()

stikline3.ipilti(150);
stikline3.stiklinejeYra();
stikline3.ispilti()


// 9. Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys, kuri 
// turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 
// 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris 
// savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: 
// valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės 
// turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- 
// true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. 
// Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs 
// ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą 
// kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų 
// (gali būti truputį daugiau nei dydis).

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

class Grybas {

    constructor() {
        this.valgomas = Boolean(Math.round(Math.random()));
        this.sukirmijes = Boolean(Math.round(Math.random()));
        this.svoris = rand(5,45);
    }

}

class Krepsys {
    constructor() {
      this.grybai = [];
      this.dydis = 500;
      this.prikrauta = 0;
    }
  
    deti(grybas) {
      if (grybas.valgomas && !grybas.sukirmijes) {
        if (this.dydis >= grybas.svoris) {
          this.grybai.push(grybas);
          this.dydis -= grybas.svoris;
          this.prikrauta++;
        } else {
          console.log("Krepšys pilnas");
        }
      } else {
        console.log("Grybas netinka");
      }
    }
  }


  const krep = new Krepsys();

  const gryb1 = new Grybas();
  const gryb2 = new Grybas();
  const gryb3 = new Grybas();
  const gryb4 = new Grybas();
  const gryb5 = new Grybas();
  const gryb6 = new Grybas();
  const gryb7 = new Grybas();
  const gryb8 = new Grybas();
  const gryb9 = new Grybas();
  const gryb10 = new Grybas();
  
  console.log(gryb1);
  console.log(gryb2);
  console.log(gryb3);
  console.log(gryb4);
  
  krep.deti(gryb1);
  krep.deti(gryb2);
  krep.deti(gryb3);
  krep.deti(gryb4);
  krep.deti(gryb5);
  krep.deti(gryb6);
  krep.deti(gryb7);
  krep.deti(gryb8);
  krep.deti(gryb9);
  krep.deti(gryb10);
  
  console.log(krep.grybai);


