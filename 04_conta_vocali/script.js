/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function findVocal (wordControl){
    let counter = 0
    for( let i = 0; i < wordControl.length; i++ ){
        if (wordControl[i] === 'a' || wordControl[i] === 'e' ||wordControl[i] === 'i' ||wordControl[i] === 'o' || wordControl[i] === 'u' ){
            counter = counter + 1
        }
    }
    return counter
}


// Invoca la funzione qui e stampa il risultato in console
let result = findVocal(word)
console.log(result)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
