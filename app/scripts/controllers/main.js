'use strict';

/**
 * @ngdoc function
 * @name myFirstAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myFirstAngularApp
 */
angular.module('myFirstAngularApp')
  .controller('MainCtrl', function ($scope, $location, $sessionStorage) {
  	this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.$global = $sessionStorage;
    /*$scope.userAvatar = $scope.$global.user['avatar'];*/

    if ($scope.$global.user === undefined || new Date($scope.$global.user.expired).getTime() < new Date().getTime()) {
		$location.path('/login');
	}
  });
