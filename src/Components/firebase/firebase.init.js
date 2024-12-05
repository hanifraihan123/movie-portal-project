// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5u-L8wR2hMn9eDBc4Ht3o0dLhvx0Wqe0",
  authDomain: "movie-portal-project.firebaseapp.com",
  projectId: "movie-portal-project",
  storageBucket: "movie-portal-project.firebasestorage.app",
  messagingSenderId: "10955275788",
  appId: "1:10955275788:web:b73bbd61cb6d500c87b829"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
