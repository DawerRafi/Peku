'use strict';

angular.module('mean.peku').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('peku example page', {
      url: '/peku/example',
      templateUrl: 'peku/views/index.html'
    });
  }
]);
