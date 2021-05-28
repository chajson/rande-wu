function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function checkEqualPassword(password, reapeatPassword) {
  const $resultPassword = $(".result-password");
  if (password != reapeatPassword) {
    $resultPassword.text("Hasła się różnia od siebie");
    console.log(password, reapeatPassword);
  } else {
    $resultPassword.text("");
  }
}

function validate() {
  const email = $("#singup-email").val();
  const $resultEmail = $(".result-email");
  const password = $("#signup-password").val();
  const equalPassword = $("#repeatPassword").val();

  checkEqualPassword(password, equalPassword);
  if (!validateEmail(email)) {
    $resultEmail.text("Adres email (" + email + ") ma niepoprawny format");
  }
}
