import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo9eOBsxdzS_WPsqDHmzjSkl0rCZVJyTM",
  authDomain: "crudawp.firebaseapp.com",
  projectId: "crudawp",
  storageBucket: "crudawp.appspot.com",
  messagingSenderId: "322530382899",
  appId: "1:322530382899:web:c7cc296a597324ee7bbf46",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
