//L'utente sceglie tra pari o dispari;
//l'utente inserisce un numero da 1 a 5;

let iaNumber = iaRandomNumber(5, 1);
console.log(iaNumber);

function iaRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}