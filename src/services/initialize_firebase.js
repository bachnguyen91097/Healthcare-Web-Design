// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7xQth70Dm8GtUuuD7lmKLCYa3V26vieI",
    authDomain: "chenmed-career-site.firebaseapp.com",
    projectId: "chenmed-career-site",
    storageBucket: "chenmed-career-site.appspot.com",
    messagingSenderId: "1048928265614",
    appId: "1:1048928265614:web:c0e56c712ce784c093f0df",
    measurementId: "G-S8X5FX0LXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);