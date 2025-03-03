/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function  oraSaluti(nam1){
var saluto = new Date();
var orario = saluto.getHours();
if ((orario > 06) && (orario <= 13)) {
console.log(`Buon giorno ${nam1}`);
}
if ((orario > 12) && (orario <= 17)) {
    console.log(`Buon pomeriggio ${nam1}`);
}
if ((orario > 18) && (orario <= 18)) {
    console.log(`Buonasera ${nam1}`);
}
if ((orario >= 00) && (orario <= 06)) {
    console.log(`Buonasera ${nam1}`);
}
}

// Invoca la funzione qui e stampa il risultato in console

oraSaluti(name)


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.