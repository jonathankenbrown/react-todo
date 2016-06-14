import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAae6E6OBRkASmrDYS-RSCQWIP1Q2kkJ6o",
    authDomain: "brown-todo-app.firebaseapp.com",
    databaseURL: "https://brown-todo-app.firebaseio.com",
    storageBucket: "brown-todo-app.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
