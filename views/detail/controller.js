/*
* @Author: 虚竹
* @Date:   2016-09-29 09:29:36
* @Last Modified by:   虚竹
* @Last Modified time: 2016-09-30 10:58:15
*/

;(function(angular) {
	'use strict';
	var app = angular.module("renren");
	app.controller('detailController', ['$scope', '$routeParams', 'httpService', function($scope, $routeParams, httpService) {
		console.log($routeParams.id);
		var url = "http://api.douban.com/v2/movie/subject/" + $routeParams.id;

		httpService.jsonp(url, {}, function(data) {
			console.log(data);
			$scope.movieInfo = data;
			$scope.$apply();
		});
	}]);
})(angular);
