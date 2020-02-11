import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";

const fire_config = {
  apiKey: "AIzaSyAlf-fm1Urg6JDGEPPxIlG86yaWgZFNIqo",
  authDomain: "project2020-4.firebaseapp.com",
  databaseURL: "https://project2020-4.firebaseio.com",
  projectId: "project2020-4",
  storageBucket: "project2020-4.appspot.com",
  messagingSenderId: "236666158190",
  appId: "1:236666158190:web:1b4d060f2ab82331b3ba7f",
  measurementId: "G-MLTKJS1XR4"
};

firebase.initializeApp(fire_config);

export default firebase;
