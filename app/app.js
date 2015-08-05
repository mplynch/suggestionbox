'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.list',
  'myApp.new',
  'myApp.welcome',
  'myApp.version'
]).

// TODO: Replace ng-router with ui-router.  See http://www.funnyant.com/angularjs-ui-router/
// The bit about state machines is what we need...

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
