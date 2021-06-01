function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate(e) {
  e.preventDefault();
  const email = $("#signin-email").val();
  const $resultEmail = $(".result-email");

  if (!validateEmail(email)) {
    $resultEmail.text("Podany adres email ma niepoprawny format");
  } else {
    $resultEmail.text("Nie ma takiego hasła lub emailu w bazie danych");
  }
}
