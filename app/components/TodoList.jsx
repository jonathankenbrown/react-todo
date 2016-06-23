var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

import TodoModal from 'TodoModal';

export var TodoList = React.createClass({
  getInitialState: function () {
    return {
      modalTodo: {}
    }
  },

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
  // console.log(this.props.todos)
  console.log(this.state)
  this.setState({
    modalTodo: test
  });
  console.log(this.state.modalTodo)
  var testVar = 'testval'
  return (
    <TodoModal todo={test}/>
  )

},

  render: function () {

    // var renderModal = (todo) => {
    //   return(
    //   <TodoModal todo={todo}/>
    //   )
    // };
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
            <div data-open="item-modal" onClick={() => this.createModal(todo)}>
              <a>
                {todo.id}
              </a>

                <TodoModal todo={this.state.modalTodo}/>
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
