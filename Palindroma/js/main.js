// chiedere all'utente di inserire una parola;
// creare una funzione per capire se la parola inserita è palindroma;

//dichiaro la variabile per la parola scritta dall'utente;
let userWord = prompt('inserisci una parola');
console.log(userWord); 

let palindromeWord = reverseString(userWord);
console.log(palindromeWord);

if (userWord === palindromeWord) {
    console.log('la tua parola è palindroma');
} else {
    console.log('la tua parola non è palindroma');
}


//creo una funzione per verificare che la parola sia palindroma;
function reverseString (str) {

    
    //uso split() per trasformare la mia stringa in un array;
    let splitString = str.split("");
    // console.log(splitString);
    // es. strano = ['s', 't', 'r', 'a', 'n', 'o'];

    //uso reverse() per capovolgere il mio array e vedere gli elementi in ordine dall'ultimo al primo;
    let reverseArray = splitString.reverse();
    // console.log(reverseArray);
    // es. strano = ['o', 'n', 'a', 'r', 't', 's']

    //uso join() per unire tutti gli elementi dell'array in un'unica stringa;
    let joinArray = reverseArray.join("");
    // console.log(joinArray);
    // es. strano = 'onarts';


    //ritorno come risultato la stringa capovolta;
    return joinArray;

}


