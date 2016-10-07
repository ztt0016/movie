/*
* @Author: 虚竹
* @Date:   2016-10-07 13:08:05
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-07 13:44:16
*/

'use strict';

define([
	'angular',
	'angularRoute',
	'views/detail/controller.js',
	'views/future/controller.js',
	'views/hot/controller.js',
	'views/search/controller.js',
	'views/top/controller.js'
], function(angular, angularRoute) {
	// Declare app level module which depends on views, and components
	return angular.module('renren', [
		'ngRoute',
		'renren.detail',
		'renren.future',
		'renren.hot',
		'renren.search',
		'renren.top'
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/hot'});
	}])
	.constant('AppConfig', {
  		pageSize: 10,
  		listApiAddress: "http://api.douban.com/v2/movie/"
  	})
  	.controller('MovieSearchController', ['$scope', '$location', 'httpService', function($scope, $location, httpService){
		// 定义jsonp请求的地址
		var url = "http://api.douban.com/v2/movie/search";

		// 1.搜索电影函数
		$scope.searchMovie = function(text) {
			// httpService.jsonp(url, {q:text}, function(data) {
			// 	console.log(data);
			// 	// $scope.$broadcast('dataListMf', data);
			// });
			// 
			// 跳转页面
			$location.path("/search/" + text);
			
		};

		// 2.给页面添加一个输入文本model
		$scope.searchText = '';
	}]);
});



