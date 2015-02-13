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

meanApp.controller('mainCtrl', function($scope, init) {

  console.log();
  
});

/*
-----------------------------------------------------------------------------------
|
| Factory
|
-----------------------------------------------------------------------------------
*/

meanApp.service('init', function($http) {

  $.get('/api/contacts').then(function(result) {
    return result;
  });
  
});