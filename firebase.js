import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // Create a dotEnv file for all these params
  apiKey: "AIzaSyABUum7ISBLW_LfHEnTqyKAmBbpyLujVkM",
  authDomain: "class-work-6a531.firebaseapp.com",
  projectId: "class-work-6a531",
  storageBucket: "class-work-6a531.appspot.com",
  messagingSenderId: "569810192688",
  appId: "1:569810192688:web:35b27415816263e46720f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// TODO:Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app)