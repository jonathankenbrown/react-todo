var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';// since file is "index.jsx", no need to specify

firebase.auth().onAuthStateChanged((user) => { // this to check if soemone is logged in or not and change "private" pages accordingly. if user exist or not.
    if (user) {
      store.dispatch(actions.login(user.uid));
      hashHistory.push('/todos');
    } else {
      store.dispatch(actions.logout());
      hashHistory.push('/');
    }
  });
// import './../playground/firebase/index';

// store.subscribe(() => {
//     var state = store.getState();
//     console.log('New state', state);
//     TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');  // adding SASS loader

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
