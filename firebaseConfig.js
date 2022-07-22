import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUNb9qx4EvbFvln45bRv3CufJEwRZNPqE",
  authDomain: "nft-marketplace-47647.firebaseapp.com",
  projectId: "nft-marketplace-47647",
  storageBucket: "nft-marketplace-47647.appspot.com",
  messagingSenderId: "648589361345",
  appId: "1:648589361345:web:582e8fe6ec8a5219141440",
  measurementId: "G-K4JTQB63XL",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
