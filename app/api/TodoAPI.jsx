var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos)); // must be (key, string), so convert array into string
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);  // try parsing. if fails, it's ok, it'll catch (instead of crashing the sw)
    } catch (e) {

    }

    return $.isArray(todos) ? todos : []; // if array is true, then return todos, if false, then []

  }
};
