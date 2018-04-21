'use strict';

module.exports = app => {
  var todoList = require('../controllers/todoListController');
  var led = require('../controllers/ledController');

  // todoList koRoutes
  app.route('/tasks')
    .get(todoList.list_all_tasks)


  // app.route('/tasks/:taskId')
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);

  //status
  //on
  //off
  app.route('/led')
    .put(led.changeStatusLed)

};