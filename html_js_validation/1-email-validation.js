function validateEmail() {
  const email = document.querySelector("#email").value;
  const emailError = document.querySelector("#error");

  const submit = document.querySelector("#submit");
  submit.addEventListener("submit", (event) => {
    if (!validateEmail()) {
      event.preventDefault();
    }
  });

  if (!email.match(/^[a-zA-Z\]\._\-[0-9]*[@][a-zA-Z]*[\.][a-z]{2,}$/)) {
    emailError.innerHTML = "Please, enter a valid email";
    return false;
  }
  emailError.innerHTML = "Valid";
  return true;
}
