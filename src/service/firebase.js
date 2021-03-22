import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAbJoFmhO0phtz8c_34TGG1bCCYtVbLsO8",
    authDomain: "react-app-b75a1.firebaseapp.com",
    databaseURL: "https://react-app-b75a1-default-rtdb.firebaseio.com",
    projectId: "react-app-b75a1",
    storageBucket: "react-app-b75a1.appspot.com",
    messagingSenderId: "1098345707033",
    appId: "1:1098345707033:web:a159984bfc54b5f0d11c88"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
