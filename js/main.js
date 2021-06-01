const createUser = (email, password, name, surname) => {
  db.collection("users").add({email, password, name, surname}).then(() => {
  })
    .catch((err) => console.log(err));
};

const acceptUser = ( acceptedUserEmail) => {
  const currentEmail = firebase.auth().currentUser.email;
  console.log(acceptedUserEmail);
  db.collection("users")
    .where("email", "==", currentEmail)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        db.collection("users")
          .doc(doc.id)
          .update({ acceptedUserEmails: firebase.firestore.FieldValue.arrayUnion(acceptedUserEmail) })
          .then(() => {
            alert("Dodano użytkownika do obserwowanych!");
          })
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
};

const rejectUser = (rejectedUserEmail) => {
  const currentEmail = firebase.auth().currentUser.email;
  db.collection("users")
    .where("email", "==", currentEmail)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        db.collection("users")
          .doc(doc.id)
          .update({ rejectedUserEmails: firebase.firestore.FieldValue.arrayUnion(rejectedUserEmail) })
          .then(() => {
            alert("Odrzucono propozycję użytkownika");
          })
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
};
const login = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password).then(cred => {
    const modal = document.getElementById('logModal');
    window.location.href="components/main.html";
    loginForm.reset();
  }).catch((e) => {
    alert('Błąd logowania');
    console.log(e);
  });
};

// pokazanie nazwy zalogowanego usera
auth.onAuthStateChanged(user => {
  const logout = document.getElementById('display-username');
  if (user) {
    console.log("user logged in: ", user.email);
    logout.innerHTML += " " +user.email;
  }
});


