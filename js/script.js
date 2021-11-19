/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).*/

// Richiesta numero chilometri
let km = parseInt(prompt('Chilometri da percorrere'));

// Richiesta età passeggero
let etaPasseggero = parseInt(prompt('Età del passeggero'));

// Prezzo al chilometro
const prezzoAlChilometro = parseInt(0.21);

// Prezzo biglietto
let biglietto = (km * prezzoAlChilometro);

// Console
console.log("Chilometri " + km);
console.log("Età passeggero " + etaPasseggero);
console.log(" Prezzo al chilometro " + prezzoAlChilometro);
console.log("Prezzo biglietto " + biglietto);