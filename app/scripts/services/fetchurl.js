'use strict';

/**
 * @ngdoc service
 * @name myFirstAngularApp.fetchUrl
 * @description
 * # fetchUrl
 * Service in the myFirstAngularApp.
 */
angular.module('myFirstAngularApp')
  .service('fetchUrl', function ($q, $http) {
    var services = {};
    services.get = function(url, data){
    	var d = $q.defer();
    	$.ajax({
    		dataType : 'json',
    		type: 'GET',
    		url : url,
    		data: data
    	}).done(function(data){
    		if(!data.error)
    			d.resolve(data);
    	}).fail(function(jqXHR, textStatus){
    		d.resolve(null);
    	});
    	return d.promise;
    };
    services.post = function(url, data){
    	var d = $q.defer();
    	$.ajax({
    		dataType : 'json',
    		type : 'POST',
    		url : url,
    		data : data
    	}).done(function(data){
    		d.resolve(data);
    	}).fail(function(jqXHR, textStatus){
    		d.resolve(null);
    	});
    	return d.promise;
    };
    return services;
  });
