'use strict';

/**
 * @ngdoc function
 * @name lubaProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lubaProjectApp
 */
angular.module('lubaProjectApp')
  .controller('MainCtrl', function ($scope, $location, anchorSmoothScroll) {
      $scope.gotoElement = function (eID){
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('bottom');

        // call $anchorScroll()
        anchorSmoothScroll.scrollTo(eID);

      };
    $scope.hdrImage = "../images/IMG_0270-HDR.jpg"

  });
