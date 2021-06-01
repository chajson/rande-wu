const firebaseConfig = {
  apiKey: "AIzaSyDqs8ODEKXdo7YENQLbKFpbVogsDd2VLgM",
  authDomain: "rande-wu-v2.firebaseapp.com",
  projectId: "rande-wu-v2",
  storageBucket: "rande-wu-v2.appspot.com",
  messagingSenderId: "1049212352083",
  appId: "1:1049212352083:web:f7cf55933bb2f9cec078a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true});
