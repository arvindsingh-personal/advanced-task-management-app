// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCHUN7y-Zml2RNC-0ZePlSz_ccQ3kiFa0",
  authDomain: "advanced-task-management-app.firebaseapp.com",
  projectId: "advanced-task-management-app",
  storageBucket: "advanced-task-management-app.appspot.com",
  messagingSenderId: "588643469651",
  appId: "1:588643469651:web:ed532fc1268aa1f670f9a6",
  measurementId: "G-QXZEG3LBDH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
