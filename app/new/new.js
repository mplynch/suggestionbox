'use strict';

angular.module('myApp.new', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {

  $stateProvider

  .state('new', {
    url: '/new',
    templateUrl: 'new/new.html',
    controller: 'NewCtrl'
  })

  .state('new.actiontype', {
    url: '/actiontype',
    templateUrl: 'new.actiontype.html'
  });
}])

.controller('NewCtrl', [function() {

}]);
