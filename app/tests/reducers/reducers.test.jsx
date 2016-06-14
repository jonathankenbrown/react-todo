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

  describe('todoReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          text: 'Shock the money',
          completed: false,
          createdAt: 345345
        }        
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    // defined todos array with realistic todo item
    // generate action// call reducer and assert completed flipped
    it('should toggle todo', () => {
      var todos = [{
        id: '123',
        text: 'Something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
      });

    it('should add existing todos', () => {
      var todos = [{
        id: '111',
        text: 'anything',
        completed: false,
        completedAt: undefined,
        created: 33000
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
