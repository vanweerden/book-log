'use strict'

angular.
  module('bookList').
  component('bookList', {
    templateUrl: 'book-list/book-list.template.html',
    controller: ['$http', function bookListController($http) {
      let self = this;
      self.orderProp = 'finished';
      self.arrow = "▲";

      self.setOrderProp = function(field) {
        // If already selected, display in descending order
        if (self.orderProp == field) {
          self.orderProp = '-' + field;
          self.arrow = "▼";
        } else {
          self.orderProp = field;
          self.arrow = "▲";
        }
      }

      $http.get('./books/books.json').
        then(response => self.books = response.data);
    }]
  });