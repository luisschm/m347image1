document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");
    const submitButton = form.querySelector("button[type='submit']");
    const successMessage = document.createElement("p");
    successMessage.classList.add("success-message");
    successMessage.style.display = "none";
    successMessage.textContent = "Deine Anfrage wurde erfolgreich gesendet.";
    form.appendChild(successMessage);

    // Validierungsfunktionen
    function validateName() {
        const nameError = document.getElementById("name-error");
        if (nameField.value.trim() === "") {
            nameError.textContent = "Bitte geben Sie Ihren Namen ein.";
            nameError.style.display = "block";
            return false;
        } else {
            nameError.style.display = "none";
            return true;
        }
    }

    function validateEmail() {
        const emailError = document.getElementById("email-error");
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value.trim())) {
            emailError.textContent = "Dieses E-Mail-Format ist nicht gültig.";
            emailError.style.display = "block";
            return false;
        } else {
            emailError.style.display = "none";
            return true;
        }
    }

    function validateMessage() {
        const messageError = document.getElementById("message-error");
        if (messageField.value.trim() === "") {
            messageError.textContent = "Bitte geben Sie eine Nachricht ein.";
            messageError.style.display = "block";
            return false;
        } else {
            messageError.style.display = "none";
            return true;
        }
    }

    // Gesamtvalidierung und Button-Steuerung
    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        // Der Senden-Button wird nur aktiviert, wenn alle Felder gültig sind
        submitButton.disabled = !(isNameValid && isEmailValid && isMessageValid);
    }

    // Event-Listener für dynamische Validierung bei Eingaben
    nameField.addEventListener("input", validateForm);
    emailField.addEventListener("input", validateForm);
    messageField.addEventListener("input", validateForm);

    // Formular-Absenden-Ereignis
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Verhindert das Standard-Absenden

        if (!submitButton.disabled) {
            // Erfolgreiche Nachricht anzeigen
            successMessage.style.display = "block";

            // Formular zurücksetzen und Button deaktivieren
            form.reset();
            submitButton.disabled = true;

            // Versteckt die Erfolgsmeldung nach ein paar Sekunden automatisch
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);
        }
    });
});
