// References
const throwComp = document.getElementById("throw-comp");
const throwUser = document.getElementById("throw-user");
const buttonGen = document.getElementById("gen");
const output = document.getElementById("output");

buttonGen.addEventListener("click", function () {

    // Throw dices
    let userThrow = 1 + parseInt(Math.random() * 5);
    let computerThrow = 1 + parseInt(Math.random() * 5);

    // Log throws
    console.log(`Hai lanciato ${userThrow}, il computer ha lanciato ${computerThrow}`);
    throwComp.innerHTML = computerThrow;
    throwUser.innerHTML = userThrow;

    // Check for result
    let result;
    if (userThrow == computerThrow) {
        result = "Pareggio";
    } else if (userThrow < computerThrow) {
        result = "Hai perso";
    } else {
        result = "Hai vinto!";
    }

    // Display result
    console.log(result);
    output.innerHTML = result;

});