console.log('Hello from app.js! Your JavaScript is connected and running!');

document.addEventListener("DOMContentLoaded", () => {
// input of function
//user information input aka their name
// output of function
const form = document.getElementById("Welcome Form");
const nameInput = document.getElementById("nameInput");
const greetingOutput = DocumentFragment.getElementById("Output Form");

form.addEventListener("submit", (event) => {
event.preventDefault();

const name = nameInput.value.trim();

if(name) {
    greetingOutput.textContent = `${name}`;
    form.reset();
} else {
    greetingOutput.textContent = "Please input name."
}
 });
});

