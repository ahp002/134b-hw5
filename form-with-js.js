const allowedChars1 = /^[A-Za-z\s]*$/;
const formErr = document.getElementById("form-errors");
const form_err = [];
function showError(input, message, show = false) {
    const errOut = document.getElementById(input.id + "-error");
    errOut.textContent = message;
    errOut.classList.add("show");  
    input.classList.add("flash");   

    form_err.push({
        field: input.id,
        reason: message,
        value: input.value
    });


    setTimeout(() => {
        errOut.classList.remove("show");
    }, 1000);
}

function enforceCharacterRules(event) {
    const input = event.target;
    input.setCustomValidity("");
    if (!allowedChars1.test(input.value)) {
        showError(input, "Invalid character entered.", true);
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
    n.addEventListener("input", () => {
        if (n.validity.valueMissing) {
            showError(nameIn, "Name cannot be blank.");
        } else if (n.validity.tooShort) {
            showError(nameIn, "Name must be at least 4 characters.");
        } else {
            n.setCustomValidity("");
        }
    });
}

function emailError(em) {
    em.addEventListener("input", () => {
        if (em.validity.valueMissing) {
            em.setCustomValidity("Email cannot be blank.");
        } else if (em.validity.tooShort) {
            em.setCustomValidity("Email must be at least 5 characters.");
        } else if (em.validity.typeMismatch){
            em.setCustomValidity("Entered value must be an email address (e.g. johndoe@gmail.com)");
        } else
            em.setCustomValidity("");
    });
}

function commentError(c) {
    c.addEventListener("input", () => {
        if (c.validity.valueMissing) {
            c.setCustomValidity("Comments cannot be blank.");
        } else
            c.setCustomValidity("");
    });
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
// formErr.value = JSON.stringify(form_err);

