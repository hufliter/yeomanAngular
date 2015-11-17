'use strict';

/**
 * @ngdoc service
 * @name myFirstAngularApp.login
 * @description
 * # login
 * Service in the myFirstAngularApp.
 */
angular.module('myFirstAngularApp')
  .service('login', function ($q , $http, fetchUrl) {
    var services = {};
    services.validate = function(data){
    	var d = $q.defer();
    	/*fetchUrl.post(app_config.url + '/api/web/v1/authenticate/login', data).then(function(result){
    		d.resolve(result);
    	});*/
    	$http.jsonp(app_config.url + '/api/web/v1/authenticate/login?callback=JSON_CALLBACK&username='+data.username+'&password='+data.password,data).then(function(result){
    		d.resolve(result);
    	});
    	return d.promise;
    };
    return services;
  });
