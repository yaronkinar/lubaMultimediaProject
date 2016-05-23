'use strict';

/**
 * @ngdoc directive
 * @name lubaProjectApp.directive:canvas
 * @description
 * # canvas
 */
angular.module('lubaProjectApp')
  .directive('imagecanvasdirective', function ($rootScope,$templateRequest,$compile) {
    return {
      template: "<canvas id='image' class='img-thumbnail' width='250' height='167'/>",
      restrict: 'E',
      scope:true,
      link: function postLink(scope, element, attrs) {
        var canvas1 = document.getElementById('image'),
          context1 = canvas1.getContext('2d');

        make_base1();

        function make_base1()
        {
          var base_image1 = new Image();
          base_image1.src = "../images/brackting.gif";
          base_image1.onload = function() {
            context1.drawImage(base_image1, 0, 0);
          }
        }

        
      }
    };
  });
