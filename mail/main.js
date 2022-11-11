// Declare invitates list
const invitatesEmailList = [
    "mario.mail",
    "gigi.mail",
    "luca.mail",
    "alessandro.mail",
    "nestore.mail"
];

// References
const inputMail = document.getElementById("input-email");
const inputSubmit = document.getElementById("input-submit");
const output = document.getElementById("output");

inputSubmit.addEventListener("click", function () {

    // Get user email
    const userEmail = inputMail.value;

    // Check for email presence
    let invited = false;
    for (let i = 0; i < invitatesEmailList.length; i++) {

        let invitateEmail = invitatesEmailList[i];
        if (invitateEmail == userEmail) {
            invited = true;
        }

    }

    // Decide a response
    let response;
    if (invited) {
        response = "Sei invitato!";
    } else {
        response = "Non sei invitato";
    }

    // Display reponse
    output.style.display = "inline-block";
    output.innerHTML = response;
    console.log(response);
});