'use strict';

/**
 * @ngdoc function
 * @name lubaProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lubaProjectApp
 */
angular.module('lubaProjectApp')
  .controller('GalleryCtrl', function ($scope, Lightbox) {
    $scope.images = [
      {
        'url': '../images/IMG_0270.JPG',
        'thumbUrl': '../images/IMG_0270.JPG' // used only for this example
      },
      {
        'url': '../images/IMG_0271.JPG',
        'thumbUrl': '../images/IMG_0271.JPG'
      },
      {
        'url': '../images/IMG_0272.JPG',
        'thumbUrl': '../images/IMG_0272.JPG'
      },
      {
        'type': 'video',
        'url': 'https://www.youtube.com/embed/IYrtUTbCSvM'
      }
    ];

    $scope.openLightboxModal = function (index) {
      Lightbox.openModal($scope.images, index);
    };
  });
