'use strict'

angular.
  module('bookList').
  component('bookList', {
    templateUrl: 'book-list/book-list.template.html',
    controller: ['$http', function bookListController($http) {
      let self = this;

      $http.get('./books/books.json').
        then(response => self.books = response.data);
    }]
  });