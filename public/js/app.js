/*
-----------------------------------------------------------------------------------
|
| Initialize Angular Application
|
-----------------------------------------------------------------------------------
*/

var meanApp = angular.module('meanApp', ['ngResource']);

/*
-----------------------------------------------------------------------------------
|
| Add controller (we are only using one for the sake of simplicity)
|
-----------------------------------------------------------------------------------
*/

meanApp.controller('mainCtrl', function($scope, $http, init) {

  $scope.newContact = {};

  // Populate the applicationa with all contacts
  init.getAllContacts(function(response) {
    $scope.contacts = response;
    $scope.$apply();
  });

  // Add new contact to database
  $scope.addContact = function() {
    $.post('/api/contacts', $scope.newContact);
    $scope.contacts.push($scope.newContact);
    $scope.newContact = {};
  }

});

/*
-----------------------------------------------------------------------------------
|
| Factory
|
-----------------------------------------------------------------------------------
*/

meanApp.factory('init', function($http) {
  return {
    getAllContacts: function(callback) {
      $.get('/api/contacts').success(function(response) {
        callback(response);
      });
    }
  }
});