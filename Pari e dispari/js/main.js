//L'utente sceglie tra pari o dispari;
//l'utente inserisce un numero da 1 a 5;
let userChoice = prompt('scegli tra pari o dispari');
let userNumber = parseInt(prompt('inserisci un numero intero da 1 a 5'));
console.log(userNumber);

let iaNumber = iaRandomNumber(5, 1);
console.log(iaNumber);

let sum = userNumber + iaNumber;
console.log(sum);

isEven(sum);

if (isEven(sum) === true) {
    console.log('Ha vinto il pari');
} else {
    console.log('Ha vinto il dispari');
}

function iaRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function isEven(number) {
    if (number % 2 === 0){
        return true;
    } else {
        return false;
    }
}