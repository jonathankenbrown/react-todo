var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var TodoModal = require('TodoModal');

export var Todo = React.createClass({
  // foundation modal initialisation
  componentDidMount: function() {
         $(document).foundation();
       },

  render: function () {

    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
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
          <a data-reveal-id="myModal">
            TestModalLink
          </a>
        </div>
        <div>
        <div id="myModal" className="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
            <h2 id="modalTitle">Awesome. I have it.</h2>
            <p className="lead">Your couch.  It is mine.</p>
            <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
            <a className="close-reveal-modal" aria-label="Close">&#215;</a>
        </div></div>
      </div>
    )
  }
});

export default connect()(Todo);
