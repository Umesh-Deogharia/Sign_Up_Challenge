const emailValue = document.querySelector("#email");
const passwordValue = document.querySelector("#Password");
const submit = document.querySelector("#submit");
const emailError = document.querySelector("#error1");
const passError = document.querySelector("#error2");
const success = document.querySelector("#success");

// console.log(emailError, passError);
submit.addEventListener("click", () => {
  let eValue = emailValue.value;
  let pValue = passwordValue.value;
});

emailValue.addEventListener("input", validation);
passwordValue.addEventListener("input", validation);

function passwordValidation() {
  let pvalue = passwordValue.value;
  if (pvalue.length > 8) {
    passError.style.display = "none";
    return true;
  } else {
    passError.style.display = "block";
    return false;
  }
}

function emailValidation() {
  let evalue = emailValue.value;
  if (evalue.length > 3 && evalue.includes("@") && evalue.includes(".")) {
    emailError.style.display = "none";
    return true; // Valid email address
  } else {
    emailError.style.display = "block";
    return false; // Invalid email address
  }
}

function validation() {
  let email = emailValidation();
  let password = passwordValidation();

  if (email && password) {
    success.style.display = "block";
  } else {
    success.style.display = "none";
  }
}
validation();

submit.addEventListener("click", submission);
function submission(e) {
  e.preventDefault();
  let userconfirm = confirm("Do you want to submit");

  if (userconfirm) {
    alert("Successful signup!");
  } else {
    emailValue.value = "";
    passwordValue.value = "";
    location.reload();
  }
}
