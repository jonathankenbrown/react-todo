var React = require('react');
var TodoList = require('TodoList');  // #3

var TodoApp = React.createClass({
  getInitialState: function () {        // #1
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Wash the car'
        }, {
          id: 4,
          text: 'Cook dinner'
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;         // #2 , #4 to add TodoList
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
