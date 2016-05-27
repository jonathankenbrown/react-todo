var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoForm = require('TodoForm');

describe('TodoForm', () => {
  it('should exist', () => {
    expect(TodoForm).toExist();
  });

  it('should call onAddTodo if text is entered', () => {
    var todoText = 'Poop';
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText)
  });

  it('should not call onAddTodo prop when invalid input', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var todoForm = TestUtils.renderIntoDocument(<TodoForm onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoForm));

    todoForm.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
