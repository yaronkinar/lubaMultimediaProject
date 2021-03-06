'use strict';

/**
 * @ngdoc overview
 * @name lubaProjectApp
 * @description
 * # lubaProjectApp
 *
 * Main module of the application.
 */
angular
  .module('lubaProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'bootstrapLightbox'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/hdr', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/more', {
        templateUrl: 'views/more.html'

      })
      .when('/contact', {
        templateUrl: 'views/contact.html'

      })
      .when('/home', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }).config(function (LightboxProvider) {
  LightboxProvider.fullScreenMode = true;
  LightboxProvider.templateUrl = 'views/lightboxtmpl.html';

});
