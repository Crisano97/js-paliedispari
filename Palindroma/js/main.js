// let userWord = prompt('inserisci una parola');
// console.log(userWord); 

// let palindromeWord = reverseString(userWord);
// console.log(palindromeWord);

// if (userWord === palindromeWord) {
//     console.log('la tua parola è palindroma');
// } else {
//     console.log('la tua parola non è palindroma');
// }

// function reverseString (string) {
    
//     let splitString = string.split("");
    
//     let reverseArray = splitString.reverse();
    
//     let joinArray = reverseArray.join("");

//     return joinArray;

// }

const userWord = prompt('inserisci una parola');
console.log(userWord);

const palindromeWord = reverseWord(userWord);
console.log(palindromeWord);

if (userWord === palindromeWord) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}

function reverseWord (word) {
    let reverseString = "";

    for (let i = word.length -1; i >= 0 ; i--) {
        reverseString += word[i];
        // console.log(reverseString);
    }

    return reverseString;
}
