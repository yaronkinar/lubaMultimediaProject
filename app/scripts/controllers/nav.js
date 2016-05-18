'use strict';

/**
 * @ngdoc function
 * @name lubaProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lubaProjectApp
 */
angular.module('lubaProjectApp')
  .controller('NavCtrl', function ($scope, $location, anchorSmoothScroll) {
    $scope.isActive = function (viewLocation) {
      var active = (viewLocation === $location.path());
      return active;
    };

  });
