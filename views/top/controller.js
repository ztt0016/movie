/*
* @Author: 虚竹
* @Date:   2016-09-29 09:29:36
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-07 13:37:36
*/


'use strict';
define([
    'angular', 
    'angularRoute',
    'components/directive/autoFocus.js',
    'components/service/httpService.js'
    ], function() {
    var app = angular.module("renren.top", ['ngRoute', 'renren.directive', 'renren.http']);
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/top', {
            templateUrl: '/views/top/view.html',
            controller: 'topController'
        })
    }]);
    app.controller('topController', ['$scope', 'httpService', function($scope, httpService) {
        $scope.dataList = {};
        var url = "http://api.douban.com/v2/movie/top250";
        httpService.jsonp(url, {}, function(data) {
            console.log(data);
            $scope.dataList = data;
            $scope.$apply();
        });

                // 接受广播数据
        $scope.$on('dataListMf', function(event, data) {
            $scope.dataList = data;
            $scope.$apply();
        });
    }]);
});