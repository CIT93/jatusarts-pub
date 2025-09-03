console.log('Hello from app.js! Your JavaScript is connected and running!');

document.addEventListener("DOMContentLoaded", () => {
// input of function
//user information input aka their name
// output of function
const form = document.getElementById("WelcomeForm");
const nameInput = document.getElementById("nameInput");
const greetingOutput = document.getElementById("OutputForm");
// Used AI to recheck code after first commit to make sure code was running in tandem with html
form.addEventListener("submit", (event) => {
event.preventDefault();

const name = nameInput.value.trim();

if(name) {
    greetingOutput.textContent = `Hello, ${name}!`;
    form.reset();
} else {
    greetingOutput.textContent = "Please input name."
}
 });
});

