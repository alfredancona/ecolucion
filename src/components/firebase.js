// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd2vwO2Og4kRpO_wpZadrCyCvgzBljN9c",
  authDomain: "ecolucion-contact-form.firebaseapp.com",
  projectId: "ecolucion-contact-form",
  storageBucket: "ecolucion-contact-form.appspot.com",
  messagingSenderId: "1005535109881",
  appId: "1:1005535109881:web:a464d25c135f8044a37828"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}