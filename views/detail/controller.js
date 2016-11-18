/*
* @Author: 张婷婷
* @Date:   2016-09-29 09:29:36
* @Last Modified by:   ztt
* @Last Modified time: 2016-11-14 18:37:07
*/

'use strict';
define([
	'angular', 
	'angularRoute',
	'components/directive/autoFocus.js',
	'components/service/httpService.js'
	], function() {
	var app = angular.module("renren.detail", ['ngRoute', 'renren.directive', 'renren.http']);
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/subject/:id', {
			templateUrl: '/views/detail/view.html',
			controller: 'detailController'
		})
	}]);
	app.controller('detailController', ['$scope', '$routeParams', 'httpService', function($scope, $routeParams, httpService) {
		console.log($routeParams.id);
		var url = "http://api.douban.com/v2/movie/subject/" + $routeParams.id;

		httpService.jsonp(url, {}, function(data) {
			console.log(data);
			$scope.movieInfo = data;
			$scope.$apply();
		});
	}]);
});



