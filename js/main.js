const createUser = (email, password) => {
  db.collection("users").add({email, password}).then(() => {
  })
    .catch((err) => console.log(err));
};
