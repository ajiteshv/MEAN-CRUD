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

meanApp.controller('mainCtrl', function($scope, $http, misc) {

  // Contact model
  $scope.newContact = {
    firstname: null,
    lastname: null,
    email: null
  };

  // Populate the applicationa with all contacts
  misc.getAllContacts(function(response) {
    $scope.contacts = response;
    $scope.$apply();
  });

  // Add new contact to database
  $scope.addContact = function() {
    
    var formFields = [];
    for(key in $scope.newContact) {
      formFields.push($scope.newContact[key]);
    }   

    if (misc.isValid(formFields)) {
      $.post('/api/contacts', $scope.newContact);
      $scope.contacts.push($scope.newContact);
      $scope.newContact = {};
    }

  }

});

/*
-----------------------------------------------------------------------------------
|
| Factory
|
-----------------------------------------------------------------------------------
*/

meanApp.factory('misc', function($http) {
  return {
    getAllContacts: function(callback) {
      $.get('/api/contacts').success(function(response) {
        callback(response);
      });
    },
    isValid: function(formFields) {
      for (i = 0; i < formFields.length; i++) {
        var arg = formFields[i];
        if (arg == null || arg == undefined || arg == '') {
          return false;
        }
      }
      return true;
    }
  }
});