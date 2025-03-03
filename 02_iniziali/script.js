/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetterOfName(ArrayNames){
    let firstLetter = []
    let notArrayname = ''
    for(let i = 0 ; i< ArrayNames.length; i++){
    notArrayname = ArrayNames[i]
    firstLetter.push(notArrayname[0])
}

return firstLetter
}

// Invoca la funzione qui e stampa il risultato in console
let  result = firstLetterOfName(names)
console.log(result) 


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]