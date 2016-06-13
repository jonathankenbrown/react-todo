var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT', // should explicity test this, rather than calling action
        searchText: 'dog'
      }
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });

    // Test that the showCompleted status gets flipped
  });
  describe('showCompletedReducer', () => {
    it('should flip (toggle) showCompleted status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
        //showCompleted: false
      }
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });
});
