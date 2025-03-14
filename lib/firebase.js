// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxRC_qKf5iI1mN02xEeOzZGNp9YA0abVo",
  authDomain: "landing-page-mod.firebaseapp.com",
  databaseURL: "https://landing-page-mod-default-rtdb.firebaseio.com",
  projectId: "landing-page-mod",
  storageBucket: "landing-page-mod.firebasestorage.app",
  messagingSenderId: "760363042360",
  appId: "1:760363042360:web:2a4a9d0b4adca0652248cd",
  measurementId: "G-B8X9GD8912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);