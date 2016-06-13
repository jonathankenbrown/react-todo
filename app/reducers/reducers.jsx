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
