var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return(
          <p className="container__message">Nonthing to do</p>
        );
      }
      return todos.map((todo) => {  // iteratively list items, but needs key (id)
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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

module.exports = TodoList;
