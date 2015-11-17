'use strict';

/**
 * @ngdoc overview
 * @name myFirstAngularApp
 * @description
 * # myFirstAngularApp
 *
 * Main module of the application.
 */
 var app_config = {
  //url: 'http://localhost:3001',
  url: 'http://rm.elidev.info',
  //url: 'http://trendify.elidev.info',
  item_per_page: 10,
  num_pages:5,
};
angular
  .module('myFirstAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
