import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkFdinWri7nbsB8IEdwPYecMsR5ub56ek",
  authDomain: "royalshop-e17d7.firebaseapp.com",
  databaseURL: "https://royalshop-e17d7.firebaseio.com",
  projectId: "royalshop-e17d7",
  storageBucket: "",
  messagingSenderId: "910557220736",
  appId: "1:910557220736:web:59ac55d281a8c2481efb65"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
