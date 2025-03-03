/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function finder(namesArray, names) {
    let found = []
    let notArrayname = ''
    for (let i = 0; i < namesArray.length; i++) {
        notArrayname = namesArray[i]
        
        
       if( notArrayname[0] === names ){
        found.push(notArrayname)
       }

    }

    return found
}


// Invoca la funzione qui e stampa il risultato in console

let result = finder(names , 'A')
console.log(result)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]