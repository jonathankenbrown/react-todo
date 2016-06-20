var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var TodoModal = require('TodoModal');

export var Todo = React.createClass({
  // foundation modal initialisation
getDefaultProps: function () {
  return {
    dummy2: 'monkey'
  };

},
  componentDidMount: function() {
    console.log(this.props)
         var elem = new Foundation.Reveal($('#exampleModal1'));
       },
componentWillReceiveProps: function(nextProps) {
console.log('asdfasdfasdfasdf')
},

shouldComponentUpdate: function(nextProps, nextState) {
  console.log(nextProps)
  return true;
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
        <a data-open="error-modal">
            {id}
            <TodoModal dummy={id}/>
        </a>
          <a data-open="exampleModal1">
              {id}WHHHHHAAA
            </a>
      </div>
        <div className="reveal" id="exampleModal1" data-reveal="">
    <h1>Awesome. I Have It.</h1>
    <p className="lead">Your couch. It is mine.</p>
    <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins! {id} {this.props.id}</p>
    <button className="close-button" data-close="" aria-label="Close modal" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
      </div>
    )
  }
});

export default connect()(Todo);
