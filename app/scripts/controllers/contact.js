'use strict';

/**
 * @ngdoc function
 * @name myFirstAngularApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the myFirstAngularApp
 */
angular.module('myFirstAngularApp')
  .controller('ContactCtrl', function($scope, $http, $sessionStorage, $location){
  	$http.get('json/locations.json').then(function(response){
  		$scope.locations = response.data;
  	});
  	$scope.$global = $sessionStorage;
  	if( $scope.$global.user === undefined || new Date($scope.$global.user.exprired).getTime() < new Date().getTime() ) {
  		$location.path('/login');
  	}
});
