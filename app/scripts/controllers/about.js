'use strict';

/**
 * @ngdoc function
 * @name myFirstAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myFirstAngularApp
 */
angular.module('myFirstAngularApp')
  .controller('AboutCtrl', function ($scope, $location, $sessionStorage) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.$global = $sessionStorage;
    if( $scope.$global.user === undefined || new Date($scope.$global.user.exprired).getTime() < new Date().getTime() ) {
    	$location.path('/login');
    }
  });
