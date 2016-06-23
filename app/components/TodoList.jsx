var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

import TodoModal from 'TodoModal';

export var TodoList = React.createClass({

createModal: function (test) {
  // getDefaultProps: function () {
  //
  // }
  // console.log(test)
  // return (
  //   {
  //     test: test
  //   }
  // )
  console.log(typeof(test))
  return(
    <div data-reveal="item-modal">
      <TodoModal todo={test}/>
    </div>
    )

},

  render: function () {

    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);


      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return filteredTodos.map((todo) => {
          //iteratively goes through each todo to find id
        return (
          <div>
            <Todo key={todo.id} {...todo}/>
            <div  onClick={() => this.createModal(todo)}>
              <a>
                {todo.id}
              </a>
              <TodoModal todo={todo}/>
            </div>
          </div>
        );
      });
    };

    return (
      <div>
        {renderTodos()}

      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
 //todos will be set on props.  TodoList has all the properties of state.todos
