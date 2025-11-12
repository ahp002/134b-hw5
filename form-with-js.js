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
    if (!allowedChars1.test(input.value)) {
        showError(input, "Invalid character entered.");
        input.value = input.value.replace(/[^A-Za-z\s]/g, "");
    } else {
        input.classList.remove("flash");
    }
}

const nameInput = document.getElementById("name");
nameInput.addEventListener("input", enforceCharacterRules);

nameInput.addEventListener("invalid", (e) => {
    showError(nameInput, "Name must be at least 4 characters. Valid characters include A-z.");
})