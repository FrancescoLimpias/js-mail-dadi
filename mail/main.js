// Declare invitates list
const invitatesEmailList = [
    "mario.mail",
    "gigi.mail",
    "luca.mail",
    "alessandro.mail",
    "nestore.mail"
];

// Get user email
const userEmail = prompt("Inserisci la tua email");

// Check for email presence
let invited = false;
for (let i = 0; i < invitatesEmailList.length; i++) {

    let invitateEmail = invitatesEmailList[i];
    if (invitateEmail == userEmail) {
        invited = true;
    }

}

// Give a response
if (invited) {
    console.log("Sei invitato!");
} else {
    console.log("Non sei invitato");
}