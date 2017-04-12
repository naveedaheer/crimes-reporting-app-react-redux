import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDUbqPls1aDhX0MF_8iqDYfLKyqdZqiFvM",
    authDomain: "report-crimes-app-in-react.firebaseapp.com",
    databaseURL: "https://report-crimes-app-in-react.firebaseio.com",
    projectId: "report-crimes-app-in-react",
    storageBucket: "report-crimes-app-in-react.appspot.com",
    messagingSenderId: "818357914916"
};
export const firebaseApp = firebase.initializeApp(config);
export const ref = firebase.database().ref();