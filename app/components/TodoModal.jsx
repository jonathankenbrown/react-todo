var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var TodoModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  // propTypes: {
  //   title: React.PropTypes.string,
  //   message: React.PropTypes.string.isRequired
  // },
  componentDidMount: function () {
    // var {title, message} = this.props;
    // console.log()
    var {text, dummy, locString} = this.props;
    var modalMarkup = (
      <div id={locString} className="reveal tiny text-center" data-reveal="">
        <h4>{dummy}</h4>
        <p>{text}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($(`#${locString}`));
    // modal.open();
  },
  render: function () {  // had to move them out to reactDOM related function (inside componentDidMount) as state was being changed and React didn't like it


    return (
      <div>
      </div>
    );
  }
});

module.exports = TodoModal;
