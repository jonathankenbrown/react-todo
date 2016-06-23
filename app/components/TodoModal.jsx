var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var TodoModal = React.createClass({

  // getDefaultProps: function () {
  //   return {
  //     text: '',
  //     id: ''
  //   };
  // },
  // propTypes: {
  //   text: React.PropTypes.string,
  //   id: React.PropTypes.string.isRequired
  // },


  componentDidMount: function () {
    var {text, id} = this.props;
    // console.log()
    console.log("start")
    console.log(text)
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
    console.log("mid")
    console.log(newProps)

    var picked = newProps.picked;

    if (picked) {
      // console.log('TRUE!')
    };

      var text = newProps.todo.text;
      var id = newProps.todo.id;
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
    modal.open();
    // }
  },

  render: function () {
console.log("end")

    return (
      <div>
      </div>
    );
  }
});

module.exports = TodoModal;
