var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

import TodoModal from 'TodoModal';

export var TodoList = React.createClass({
  getInitialState: function () {
    return {
      modalData: {
        modalTodo: {},
        picked: false
      },
    }
  },

  createModal: function (modalTodo) {
    return(
      this.setState({
        modalData: {
          modalTodo: modalTodo,
          picked: true
        }
      })
    )
  },

  render: function () {

    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      var renderFilteredTodo = () => {
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
              <div onClick={() => this.createModal(todo)}>
                <a>
                  {todo.id}
                </a>

              </div>
            </div>
          );
        });
      };
      console.log(this.state)
      return (

        <div>
          {renderFilteredTodo()}
          <div data-open="item-modal">
          <TodoModal todo={this.state.modalData.modalTodo} picked={this.state.modalData.picked}/>
          </div>
        </div>
      )
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
