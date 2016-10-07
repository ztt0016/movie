/*
 * @Author: 虚竹
 * @Date:   2016-09-29 09:29:36
 * @Last Modified by:   虚竹
 * @Last Modified time: 2016-10-07 13:36:34
 */

'use strict';
define([
    'angular', 
    'angularRoute',
    'components/directive/autoFocus.js',
    'components/service/httpService.js'
    ], function() {
    var app = angular.module("renren.hot", ['ngRoute', 'renren.directive', 'renren.http']);
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/hot', {
            templateUrl: '/views/hot/view.html',
            controller: 'hotController'
        })
    }]);
    app.controller('hotController', ['$scope', 'httpService', function($scope, httpService) {
        var pageSize = 10;
        var page = 1;
        var start = pageSize * (page-1);

        $scope.totalPage = 1;
        $scope.currentPage = 1;
        
        $scope.dataList = {};

        $scope.isLoading = true;

        function getMovie(start) {
            var url = "http://api.douban.com/v2/movie/in_theaters";
            httpService.jsonp(url, {
                start:start, 
                count: pageSize
            }, function(data) {
                console.log(data);
                $scope.dataList = data;
                $scope.totalPage = Math.ceil(data.total/pageSize);
                $scope.isLoading = false;
                $scope.$apply();
            }); 
        }
        getMovie(0);

        $scope.goNext = function(currentPage) {
            if(currentPage <= $scope.totalPage) {
                $scope.isLoading = !$scope.isLoading;
                var start = pageSize * (currentPage - 1);
                getMovie(start);
                $scope.currentPage++;
            }
        };

        $scope.goPre = function(currentPage) {
            if(currentPage >= 1) {
                $scope.isLoading = !$scope.isLoading;
                var start = pageSize * (currentPage - 1);
                getMovie(start);
                $scope.currentPage--;
            }
        };
    }]);
});
