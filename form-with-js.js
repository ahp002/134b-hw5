const allowedChars1 = /^[A-Za-z\s]*$/;
const formErr = document.getElementById("form-errors");
const form_err = [];
function showError(input, message, hide) {
    const errOut = document.getElementById(input.id + "-error");

    form_err.push({
        field: input.id,
        reason: message,
        value: input.value
    });

    if (!hide) {
        errOut.textContent = message;
        errOut.classList.add("show");  
        input.classList.add("flash");   
        setTimeout(() => {
        errOut.classList.remove("show");
        }, 1000);
    }
}

function showInfo(input, message) {
    const info = document.getElementById(input.id + "-info");

    info.textContent = message;
    info.classList.add("show");
}

function enforceCharacterRules(event) {
    const input = event.target;
    input.setCustomValidity("");
    if (!allowedChars1.test(input.value)) {
        showError(input, "Invalid character entered.", false);
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
const emailIn = document.getElementById("email");
const commentIn = document.getElementById("comment");

function nameError(n) {
    if (nameIn.validity.valueMissing) {
        n.setCustomValidity("Name cannot be blank.");
        showError(nameIn, "Name cannot be blank.", true);
        showInfo(nameIn, "Enter your first and last name.");
    }
    n.addEventListener("input", () => {
        if (n.validity.tooShort) {
            showError(nameIn, "Name must be at least 4 characters.", true);
            n.setCustomValidity("Name must be at least 4 characters.");
        } else {
            n.setCustomValidity("");
        }
    });
}

function emailError(em) {
    if (emailIn.validity.valueMissing) {
        showError(emailIn, "Email cannot be blank.", true);
        em.setCustomValidity("Email cannot be blank.");
        showInfo(emailIn, "Use an '@' symbol and a valid domain (e.g., .com, .edu).");
    }
    em.addEventListener("input", () => {
         if (em.validity.tooShort) {
            showError(emailIn, "Email must be at least 5 characters.", true);
            em.setCustomValidity("Email must be at least 5 characters.");
        } else if (em.validity.typeMismatch){
            showError(emailIn, "Entered value must be an email address (e.g. johndoe@gmail.com)", true);
            em.setCustomValidity("Entered value must be an email address (e.g. johndoe@gmail.com)");
        } else
            em.setCustomValidity("");
    });
}

function commentError(c) {
    if (commentIn.validity.valueMissing) {
        showError(commentIn, "Comments cannot be blank.", true)
        c.setCustomValidity("Comments cannot be blank.");
        showInfo(commentIn, "Describe your feedback clearly. (Maximum 1000 chars)");
    } c.setCustomValidity("");
}

nameError(nameIn);
emailError(emailIn);
commentError(commentIn);

const maxLength = 1000;
const counter = document.getElementById("char-count");
const textArea = document.getElementById("comment");
const wholeCounter = document.getElementById("cnt");

textArea.addEventListener("input", function() {
    const inputVal = this.value;
    const count = inputVal.length;
    const remaining = maxLength - count;
    counter.textContent = `${count}`;
    if (remaining <= 10) {
        wholeCounter.style.color = "red";
    } else {
        wholeCounter.style.color = "gray";
    }
});

form.addEventListener("submit", function(e) {
    if (!form.checkValidity()) {
        e.preventDefault();
    }
    formErr.value = JSON.stringify(form_err);
});