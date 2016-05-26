var React = require('react');

var Todo = React.createClass({
  render: function () {
    var {id, text} = this.props;  // comes from TodoList.jsx

    return (
      <div>
        {id}. {text}
      </div>
    )
  }
});

module.exports = Todo;
