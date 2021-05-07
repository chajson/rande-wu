const createUser = (email, password, name, surname) => {
  db.collection("users").add({email, password, name, surname}).then(() => {
  })
    .catch((err) => console.log(err));
};


