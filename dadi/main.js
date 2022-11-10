// Throw dices
let userThrow = 1 + parseInt(Math.random() * 5);
let computerThrow = 1 + parseInt(Math.random() * 5);

// Log throws
console.log(`Hai lanciato ${userThrow}, il computer ha lanciato ${computerThrow}`);

// Check for result
if (userThrow == computerThrow) {
    console.log("Pareggio");
} else if(userThrow < computerThrow){
    console.log("Hai perso")
} else {
    console.log("Hai vinto!");
}