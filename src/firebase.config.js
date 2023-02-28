// Configuración de Firebase para la autenticación de usuarios

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAHdMaucEJBd3Wdss9cRWVGoQjqtasZuY",
  authDomain: "auth-food-966ba.firebaseapp.com",
  projectId: "auth-food-966ba",
  storageBucket: "auth-food-966ba.appspot.com",
  messagingSenderId: "185759418886",
  appId: "1:185759418886:web:7f7e6fe50f6dc603ef9187",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
