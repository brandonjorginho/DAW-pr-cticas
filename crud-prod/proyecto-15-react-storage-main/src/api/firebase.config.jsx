import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA0CxLdewlNFiQ0yl6E4KNVCkbqp0zvPB8",
  authDomain: "storage-bca27.firebaseapp.com",
  projectId: "storage-bca27",
  storageBucket: "storage-bca27.appspot.com",
  messagingSenderId: "856376669948",
  appId: "1:856376669948:web:a0b7d04af73c0d610dc979"
};
const app =firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
