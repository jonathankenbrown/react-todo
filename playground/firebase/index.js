import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAae6E6OBRkASmrDYS-RSCQWIP1Q2kkJ6o",
  authDomain: "brown-todo-app.firebaseapp.com",
  databaseURL: "https://brown-todo-app.firebaseio.com",
  storageBucket: "brown-todo-app.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Jonathans App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Jonathan',
    age: 29
  }
});

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo application'
// }).then(() => {
//   console.log('Update worked!')
// }, (e) => {
//   console.log('Error yo!')
// });

// Method 1: using Multipath update
// firebaseRef.update({
//   'app/name': 'Jons todo app',
//   'user/name': 'AnniePie'
// });
//
// // Method 2: using child
// firebaseRef.child('app').update({
//   name: 'Zozombie Todo App!'
// });
//
// firebaseRef.child('user').update({
//   name: 'PoopiePie'
// });
//
// // firebaseRef.child('app/name').remove();
// // firebaseRef.child('app').update({
// //   version: '2.0',
// //   name: null // will remove data from database
// // });
//
// firebaseRef.update({
//   isRunning: null
// });
//
// firebaseRef.child('user/age').remove();

// // Get data from DB
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// var logData = (snapshot) => {
//   console.log('Got Value', snapshot.val());
// }
// firebaseRef.on('value', logData);
//
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});


// USING ON.  'On' will only execute when the value is updated; so console log will only be executed when 'user' is updated as follows. 'app' name has also updated but won't show in log
// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val())
// });
// firebaseRef.child('app').update({name:'Appappapp!'});
// firebaseRef.child('user').update({name:'MoMoKo'});

// -----ARRAY-----
// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog!'
// });
// console.log('Todo id', newNoteRef.key);

// **** CHALLENGE ****
// var todosRef = firebaseRef.child('todos');
//
// todosRef.on('child_added', (snapshot) => {
//   console.log('todo_added', snapshot.key, snapshot.val());
// });
//
// todosRef.on('child_changed', (snapshot) => {
//   console.log('todo_changed', snapshot.key, snapshot.val());
// });
//
// todosRef.on('child_removed', (snapshot) => {
//   console.log('todo_removed', snapshot.key, snapshot.val());
// });
//
// todosRef.push({
//   text: 'Park the car'
// });
//
// todosRef.push({
//   text: 'Eat the foooood.'
// });
