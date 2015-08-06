'use strict';

angular.module('myApp.new', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {

  $stateProvider

    .state('new', {
    url: '/new',
    templateUrl: 'new/new.html',
    controller: 'NewCtrl'
  })

  .state('new.type', {
    url: '/new-type',
    templateUrl: 'new/new-type.html',
    controller: 'NewCtrl'
  })

  .state('new.actiontype', {
    url: '/actiontype',
    templateUrl: 'new/new-actiontype.html',
  })

  .state('new.source', {
    url: '/source',
    templateUrl: 'new/new-source.html'
  })

  .state('new.description', {
    url: '/description',
    templateUrl: 'new/new-description.html'
  });
}])

.controller('NewCtrl', ['$scope', function($scope) {
  $scope.types = [{
    "text": "Health, Safety, Environmental",
    "value": "HSE"
  }, {
    "text": "Quality",
    "value": "Quality",
  }, {
    "text": "Other",
    "value": "Other"
  }];

  $scope.actiontypes = [{
    "text": "Continual Improvement",
    "value": "Continual Improvement"
  }, {
    "text": "Corrective",
    "value": "Corrective"
  }, {
    "text": "Ergonomic",
    "value": "Ergonomic"
  }, {
    "text": "Other",
    "value": "Other"
  }, {
    "text": "Preventative",
    "value": "Preventative"
  }, {
    "text": "Positive Feedback",
    "value": "Positive Feedback"
  }];
}]);
