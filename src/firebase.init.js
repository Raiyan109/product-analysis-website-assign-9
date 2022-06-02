// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQYCWMThYeU0f643EE-LPfiOJSxZq0dak",
    authDomain: "watch-review-site-assignment-9.firebaseapp.com",
    projectId: "watch-review-site-assignment-9",
    storageBucket: "watch-review-site-assignment-9.appspot.com",
    messagingSenderId: "636717906507",
    appId: "1:636717906507:web:5af0d1983c0eb543ec6bce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app