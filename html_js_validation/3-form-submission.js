function handleFormSubmit(event) {

    event.preventDefault(); // Prevent the default form submission behavior

    // Fetch values from input fields
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();

    // Get error and success message elements
    const error = document.querySelector('#error');
    const success = document.querySelector('#success');

    // Validation to ensure that all required fields are filled
    if (name === "" || email === "") {
        error.innerHTML = "Please fill in all required fields.";
        success.innerHTML = ""; // Clear the success message
    } else {
        // Clear any previous error messages
        error.textContent = "";

        // Display success message
        success.textContent = "Form submitted successfully!";
    }
}

const submitForm = document.querySelector("#submitForm");
submitForm.addEventListener("submit", handleFormSubmit);
