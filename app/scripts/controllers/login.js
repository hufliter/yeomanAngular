'use strict';

/**
 * @ngdoc function
 * @name myFirstAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myFirstAngularApp
 */
angular.module('myFirstAngularApp')
  .controller('LoginCtrl' ,function ($scope, $rootScope ,$location, $sessionStorage, login) {
  	$scope.login = function(){
  		$scope.$global = $sessionStorage;
  		if($scope.username !== '' && $scope.password !== '') {
  			login.validate({username:$scope.username, password:$scope.password}).then(function(result){
          if( result.data.error === 401 ) {
  					$scope.error_msg = result.data.msg;
  				} else {
  					$scope.$global.user = result.data;
            $rootScope.user = result.data;
  					$location.path('/');
  				}
  			});
  		} else if($scope.username === '' || $scope.username === undefined) {
  			$scope.error_msg = "Please input username";
  		} else if($scope.password === '' || $scope.password === undefined) {
  			$scope.error_msg = "Please input password";
  		}
  	};
});	
