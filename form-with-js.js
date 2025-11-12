const allowedChars1 = /^[A-Za-z\s]*$/;

function showError(input, message) {
    const errOut = document.getElementById(input.id + "-error");
    errOut.textContent = message;
    errOut.classList.add("show");  
    input.classList.add("flash");   


    setTimeout(() => {
        errOut.classList.remove("show");
    }, 1000);
}

function enforceCharacterRules(event) {
    const input = event.target;
    input.setCustomValidity("");
    if (!allowedChars1.test(input.value)) {
        showError(input, "Invalid character entered.");
        input.value = input.value.replace(/[^A-Za-z\s]/g, "");
    } else {
        input.classList.remove("flash");
        input.setCustomValidity("");
    }
}

const nameInput = document.getElementById("name");
nameInput.addEventListener("input", enforceCharacterRules);


const form = document.querySelector("form");
const nameIn = document.getElementById("name");

function nameError(n) {
    n.addEventListener("input", () => {
        if (n.validity.valueMissing) {
            n.setCustomValidity("Name cannot be blank.");
        } else if (n.validity.tooShort) {
            n.setCustomValidity("Name must be at least 4 characters.");
        } else {
            n.setCustomValidity("");
        }
    });
}

nameError(nameIn);

form.addEventListener("submit", (e) => {
  e.preventDefault();
});