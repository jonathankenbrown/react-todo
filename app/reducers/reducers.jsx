var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  // action.something = 2; // this will throw error with DEEP FREEZE.  DF will tell us that reducer is changing something it's not supposed to.
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

// showCompletedReducer, default false, TOGGLE_SHOW_COMPLETED
export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
      // add case for TOGGLE_TODO completed equal to opposite value & updateCompletedAt
    case 'UPDATE_TODO':
      return state.map((todo) => { // state iteratively runs ALL todos individually as todo, to find the id.
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          };
        } else {
          return todo;
        }
      });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};

export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
