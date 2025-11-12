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

const form = document.getElementById("form");
function validateName() {
    nameInput.setCustomValidity("");
    if (!nameInput.checkValidity()) {
        nameInput.setCustomValidity("Name cannot be blank.");
        e.preventDefault(); 
        return false;
    }
    else if (nameInput.validity.tooShort) {
        nameInput.setCustomValidity("Name must be at least 4 characters.");
        e.preventDefault(); 
        return false;
    }
    nameInput.setCustomValidity("");
    return true;
}

form.addEventListener("Submit", validateName());