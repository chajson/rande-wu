const firebaseConfig = {
  apiKey: "AIzaSyA5D5N_9YWAIKXq26nvRhC3jtdG3zCYSMc",
  authDomain: "randewu-d91d7.firebaseapp.com",
  databaseURL: "https://randewu-d91d7.firebaseio.com",
  projectId: "randewu-d91d7",
  storageBucket: "randewu-d91d7.appspot.com",
  messagingSenderId: "950118542915",
  appId: "1:950118542915:web:ceddf745acef13538eaef6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true});
