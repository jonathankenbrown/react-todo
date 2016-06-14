var React = require('react');
var {connect} = require('react-redux');
// var Todo = require('Todo');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      if (filteredTodos.length === 0) {
        return(
          <p className="container__message">Nonthing to do</p>
        );
      }
      return filteredTodos.map((todo) => {  // iteratively list items, but needs key (id)
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList); //todos will be set on props.  TodoList has all the properties of state.todos
