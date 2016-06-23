var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var TodoModal = React.createClass({

  // getDefaultProps: function () {
  //   return {
  //     title: 'Error'
  //   };
  // },
  // propTypes: {
  //   title: React.PropTypes.string,
  //   message: React.PropTypes.string.isRequired
  // },
  componentDidMount: function () {
    // var {title, message} = this.props;
    // console.log()
    console.log(this.props.todo.text)
    var modalMarkup = (
      <div id="item-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{this.props.todo.text}</h4>
        <p>{this.props.todo.id}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    // var modal = new Foundation.Reveal($(`#${locString}`));
    var modal = new Foundation.Reveal($("#item-modal"));
    // modal.open();
  },

  componentWillReceiveProps: function (newProps) {
    console.log(newProps.todo.text)
    var modalMarkup = (
      <div id="item-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{this.props.todo.text}</h4>
        <p>{this.props.todo.id}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    // var modal = new Foundation.Reveal($(`#${locString}`));
    var modal = new Foundation.Reveal($("#item-modal"));
    modal.open();
  },

  render: function () {  // had to move them out to reactDOM related function (inside componentDidMount) as state was being changed and React didn't like it
console.log("helloworld")

    return (
      <div>
      </div>
    );
  }
});

module.exports = TodoModal;
