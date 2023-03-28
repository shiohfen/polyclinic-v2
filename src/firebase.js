import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCYrrdZvV28sG5Jiykfivm95coy0UiLh2E",
  authDomain: "polyclinic-38aba.firebaseapp.com",
  projectId: "polyclinic-38aba",
  storageBucket: "polyclinic-38aba.appspot.com",
  messagingSenderId: "333291931710",
  appId: "1:333291931710:web:37fe564b2e1725c6b8696f"
}


firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const fr = firebase

// export utils/refs
export {
  db,
  auth,
  storage,
  fr
}