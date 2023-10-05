// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqzyn4OtKNeVShtrhHhvh-S0WB5WXJK-Q",
  authDomain: "auth-moha-milon-cff61.firebaseapp.com",
  projectId: "auth-moha-milon-cff61",
  storageBucket: "auth-moha-milon-cff61.appspot.com",
  messagingSenderId: "214436156015",
  appId: "1:214436156015:web:2cb4fdf104ea640d1bb39a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;