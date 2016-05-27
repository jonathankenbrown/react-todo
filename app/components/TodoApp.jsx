var React = require('react');
var TodoList = require('TodoList');  // #3
var TodoForm = require('TodoForm');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {        // #1
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        }, {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        }, {
          id: uuid(),
          text: 'Wash the car',
          completed: true
        }, {
          id: uuid(),
          text: 'Cook dinner',
          completed: false
        }
      ]
    };
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed; // toggling if id matches
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;         // #2 , #4 to add TodoList
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <TodoForm onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
