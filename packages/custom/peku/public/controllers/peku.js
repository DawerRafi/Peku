'use strict';

/* jshint -W098 */
angular.module('mean.peku').controller('PekuController', ['$scope', 'Global', 'Peku',
  function($scope, Global, Peku) {
    $scope.global = Global;
    $scope.package = {
      name: 'peku'
    };
    $scope.number;
  }
]);
