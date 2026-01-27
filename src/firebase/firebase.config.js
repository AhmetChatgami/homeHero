// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAumhLcPJVi8adDKP9ormyvv6lTavlvKQ",
  authDomain: "email-passwor-auth-a2221.firebaseapp.com",
  projectId: "email-passwor-auth-a2221",
  storageBucket: "email-passwor-auth-a2221.firebasestorage.app",
  messagingSenderId: "57585212202",
  appId: "1:57585212202:web:a630940ef15f44484c1c53"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
