const allowedChars1 = /^[A-Za-z]*$/;

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
    if (!allowedChars1.test(event.target.value)) {
        showError(event.target, "Invalid character entered.");
        event.target.value = event.target.value.replace(/[^A-Za-z\s]/g, "");
    }
}

const nameInput = document.getElementById("name");
nameInput.addEventListener("input", enforceCharacterRules);

nameInput.addEventListener("invalid", (e) => {
    showError(nameInput, "Name must be at least 4 characters. Valid characters include A-z.");
})