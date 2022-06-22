let userWord = prompt('inserisci una parola');
console.log(userWord); 

let palindromeWord = reverseString(userWord);
console.log(palindromeWord);

if (userWord === palindromeWord) {
    console.log('la tua parola è palindroma');
} else {
    console.log('la tua parola non è palindroma');
}

function reverseString (string) {
    
    let splitString = string.split("");
    
    let reverseArray = splitString.reverse();
    
    let joinArray = reverseArray.join("");

    return joinArray;

}


