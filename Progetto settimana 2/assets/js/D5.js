/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const petsInOrdine = pets.sort();
console.log(petsInOrdine);


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const petsInvertiti = pets.reverse();
console.log(petsInvertiti);


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const rimozione = pets.shift();
pets.push(rimozione);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
const licensePlateValue = 'FX737JB';

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlateValue;
}

console.log(cars)


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: 'Bmw',
  model: 'X6',
  color: 'white',
  trims: ['titanium', 'gt',],
};
cars.push(newCar);
for (let i = 0; i < cars.length; i++) {
  const trimsArray = cars[i].trims;
  if (trimsArray.length > 0) {
    trimsArray.pop();
  }
}

console.log(cars);




/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  if (cars[i].trims.length > 0) {
    justTrims.push(cars[i].trims[0]);
  }
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const primaLettera = cars[i].color.charAt(0).toLowerCase();

  if (primaLettera === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let numeri = 0;

while (numeri < numericArray.length && numericArray[numeri] !== 32) {
  console.log(numericArray[numeri]);
  numeri++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ['g', 'n', 'u', 'z', 'd'];
const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
const posizioniArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const char = charactersArray[i];

  switch (char) {
    case 'a':
      posizioniArray.push(alfabeto.indexOf('a') + 1);
      break;
    case 'b':
      posizioniArray.push(alfabeto.indexOf('b') + 1);
      break;
    case 'c':
      posizioniArray.push(alfabeto.indexOf('c') + 1);
      break;
    case 'd':
      posizioniArray.push(alfabeto.indexOf('d') + 1);
      break;
    case 'e':
      posizioniArray.push(alfabeto.indexOf('e') + 1);
      break;
    case 'f':
      posizioniArray.push(alfabeto.indexOf('f') + 1);
      break;
    case 'g':
      posizioniArray.push(alfabeto.indexOf('g') + 1);
      break;
    case 'h':
      posizioniArray.push(alfabeto.indexOf('h') + 1);
      break;
    case 'i':
      posizioniArray.push(alfabeto.indexOf('i') + 1);
      break;
    case 'l':
      posizioniArray.push(alfabeto.indexOf('l') + 1);
      break;
    case 'm':
      posizioniArray.push(alfabeto.indexOf('m') + 1);
      break;
    case 'n':
      posizioniArray.push(alfabeto.indexOf('n') + 1);
      break;
    case 'o':
      posizioniArray.push(alfabeto.indexOf('o') + 1);
      break;
    case 'p':
      posizioniArray.push(alfabeto.indexOf('p') + 1);
      break;
    case 'q':
      posizioniArray.push(alfabeto.indexOf('q') + 1);
      break;
    case 'r':
      posizioniArray.push(alfabeto.indexOf('r') + 1);
      break;
    case 's':
      posizioniArray.push(alfabeto.indexOf('s') + 1);
      break;
    case 't':
      posizioniArray.push(alfabeto.indexOf('t') + 1);
      break;
    case 'u':
      posizioniArray.push(alfabeto.indexOf('u') + 1);
      break;
    case 'v':
      posizioniArray.push(alfabeto.indexOf('v') + 1);
      break;
    case 'z':
      posizioniArray.push(alfabeto.indexOf('z') + 1);
      break;
    default:
      posizioniArray.push(-1);
  }
}

console.log(posizioniArray);


