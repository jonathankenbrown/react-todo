var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var TodoModal = React.createClass({

  componentDidMount: function () {
    var {text, id} = this.props;
    var modalMarkup = (
      <div id="item-modal" className="reveal tiny text-center" data-reveal="" >
        <h4>{text}</h4>
        <p>{id}</p>
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
    var modal = new Foundation.Reveal($("#item-modal")
      // closeOnEsc: false,
      // resetOnClose: true
    );
    // modal.open();
  },

  componentWillReceiveProps: function (newProps, newState) {
console.log("testprint")
    var resetModal2 = () => {
      // e.preventDefault();
      this.props.resetModal();
    };

    var picked = newProps.picked;

    if (picked) {
      var text = newProps.todo.text;
      var id = newProps.todo.id;
    var modalMarkup = (
      <div id="item-modal" className="reveal tiny text-center" data-reveal="" >
        <h4>{text}</h4>
        <p>{id}</p>
        <p>
          <button className="button hollow" data-close="" >
            Okay
          </button>
        </p>
        {this.props.resetModal()}
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($("#item-modal")
          // closeOnEsc: false,
      // resetOnClose: true
    );
    modal.open();
    }
  },

  render: function () {
    return (
      <div>
      </div>
    );
  }
});

module.exports = TodoModal;
