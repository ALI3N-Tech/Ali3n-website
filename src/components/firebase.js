import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyB53TSfQqdAADGyDkf3kKo_UiQi8LABRZc",
  authDomain: "newsletter-a9319.firebaseapp.com",
  projectId: "newsletter-a9319",
  storageBucket: "newsletter-a9319.appspot.com",
  messagingSenderId: "461250437687",
  appId: "1:461250437687:web:7b49c8a64fcb02f745d5b2",
  measurementId: "G-MZWG4410DR",
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://newsletter-a9319-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
//const database = getDatabase(app);

export default app;
