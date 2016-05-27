var React = require('react');
var TodoList = require('TodoList');  // #3
var TodoForm = require('TodoForm');

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
  handleAddTodo: function (text) {
    alert('new todo: ' + text);

  },
  render: function () {
    var {todos} = this.state;         // #2 , #4 to add TodoList
    return (
      <div>
        <TodoList todos={todos}/>
        <TodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
