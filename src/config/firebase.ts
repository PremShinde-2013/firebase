// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1FCURhA_X5YVhjfpM2zdnBpRiwgEwGD0",
  authDomain: "fir-tut-8c32b.firebaseapp.com",
  projectId: "fir-tut-8c32b",
  storageBucket: "fir-tut-8c32b.appspot.com",
  messagingSenderId: "819122658015",
  appId: "1:819122658015:web:b606b2bb3b4195def6e76a",
  measurementId: "G-4THS9R8DPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider =  new GoogleAuthProvider()