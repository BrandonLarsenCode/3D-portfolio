// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfkxf981fTHoTZAnw51HLMEwVLcHUTnKg",
  authDomain: "brandon-larsen-portfolio.firebaseapp.com",
  projectId: "brandon-larsen-portfolio",
  storageBucket: "brandon-larsen-portfolio.appspot.com",
  messagingSenderId: "947040680699",
  appId: "1:947040680699:web:eeb8ed85270a0bd9328e5e",
  measurementId: "G-E1P112YJDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);