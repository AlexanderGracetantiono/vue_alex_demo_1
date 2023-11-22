// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAABw2gl4dEYC320XZTr6jIffUA-ERcCNM",
  authDomain: "axe-vue-appl.firebaseapp.com",
  databaseURL: "https://axe-vue-appl-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "axe-vue-appl",
  storageBucket: "axe-vue-appl.appspot.com",
  messagingSenderId: "58727127073",
  appId: "1:58727127073:web:8984ed063e1d541a8bab60"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);