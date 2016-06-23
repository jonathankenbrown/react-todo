var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var TodoModal = require('TodoModal');

export var Todo = React.createClass({

  render: function () {

    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var locString = "item-modal" + id;
    console.log(this.props);

    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div>
        <div className={todoClassName} onClick={() => {
            dispatch(actions.startToggleTodo(id, !completed));
          }}>
          <div>
            <input type="checkbox" checked={completed}/>
          </div>
          <div>
            <p>{text}</p>
            <p className="todo__subtext">{renderDate()}</p>
          </div>
        </div>
        <div>


      </div>
      </div>
    )
  }
});

export default connect()(Todo);
