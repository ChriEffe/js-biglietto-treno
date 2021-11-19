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
const prezzoAlChilometro = 0.21;

// Prezzo biglietto
let biglietto = (km * prezzoAlChilometro);

// Sconto minorenni
let scontoMinorenni = ((biglietto * 20) / 100);

// Sconto over 65
let scontoAnziani = ((biglietto * 40) / 100);

// Prezzo finale
if (etaPasseggero < 18) {
    document.writeln("Il prezzo del biglietto è € " + (biglietto - scontoMinorenni).toFixed(2));
    console.log("Prezzo biglietto minorenni € ");
} else if (etaPasseggero > 65) {
    document.writeln("Il prezzo del biglietto è € " + (biglietto - scontoAnziani).toFixed(2));
    console.log("Prezzo biglietto over 65 € ");
} else {
    document.writeln("Il prezzo del biglietto è € " + biglietto.toFixed(2));
    console.log("Prezzo biglietto pieno € ");
}

// Console
console.log("Chilometri " + km);
console.log("Età passeggero " + etaPasseggero);
console.log("Prezzo al chilometro € " + prezzoAlChilometro);
console.log("Prezzo biglietto € " + biglietto);
console.log("Sconto minorenni € " + scontoMinorenni);
console.log("Sconto over 65 € " + scontoAnziani);