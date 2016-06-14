var $ = require('jquery');

module.exports = {
//   setTodos: function(todos) {
//     if ($.isArray(todos)) {
//       localStorage.setItem('todos', JSON.stringify(todos)); // must be (key, string), so convert array into string
//       return todos;
//     }
//   },
//   getTodos: function () {
//     var stringTodos = localStorage.getItem('todos');
//     var todos = [];
//
//     try {
//       todos = JSON.parse(stringTodos);  // try parsing. if fails, it's ok, it'll catch (instead of crashing the sw)
//     } catch (e) {
//
//     }
//
//     return $.isArray(todos) ? todos : []; // if array is true, then return todos, if false, then []
//
//   },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => { // filter is built in
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
      // if (searchText.length === 0 || text.indexOf(searchText) > -1) {    ///// same as above
      //   return todo;
      // }

    });

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) { // same as a.completed === false && b.completed === true
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
