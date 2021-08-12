import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyADj3yonlo-nEDZ2WgWZJi7VwnFQx_G6Aw",
  authDomain: "linked-in-a3d77.firebaseapp.com",
  projectId: "linked-in-a3d77",
  storageBucket: "linked-in-a3d77.appspot.com",
  messagingSenderId: "886894392035",
  appId: "1:886894392035:web:92ffcc7b2e0f440bd78bd6",
  measurementId: "G-GR5P88YGFY",
};

const Firebase = firebase.initializeApp(firebaseConfig);

const database = Firebase.firestore();
const auth = Firebase.auth();

export { database, auth };
