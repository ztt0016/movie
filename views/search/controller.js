/*
 * @Author: 张婷婷
 * @Date:   2016-09-29 09:29:36
 * @Last Modified by:   ztt
 * @Last Modified time: 2016-11-14 18:36:52
 */

'use strict';
define([
    'angular', 
    'angularRoute',
    'components/directive/autoFocus.js',
    'components/service/httpService.js'
    ], function() {
    var app = angular.module("renren.search", ['ngRoute', 'renren.directive', 'renren.http']);
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/search/:text', {
            templateUrl: '/views/search/view.html',
            controller: 'searchController'
        })
    }]);
    app.controller('searchController', ['$scope', '$routeParams', 'httpService', function($scope, $routeParams, httpService) {
        console.log("1s sddf");
        var pageSize = 10;
        var page = 1;
        var start = pageSize * (page-1);

        $scope.totalPage = 1;
        $scope.currentPage = 1;
        
        $scope.dataList = {};

        $scope.isLoading = true;

        function getMovie(start, text) {
            var url = "http://api.douban.com/v2/movie/search";
            httpService.jsonp(url, {
                start:start, 
                count: pageSize,
                q:text
            }, function(data) {
                console.log(data);
                $scope.dataList = data;
                $scope.totalPage = Math.ceil(data.total/pageSize);
                $scope.isLoading = false;
                $scope.$apply();
            }); 
        }
        getMovie(0, $routeParams.text);

        $scope.goNext = function(currentPage) {
            if(currentPage <= $scope.totalPage) {
                $scope.isLoading = !$scope.isLoading;
                var start = pageSize * (currentPage - 1);
                getMovie(start, $routeParams.text);
                $scope.currentPage++;
            }
        };

        $scope.goPre = function(currentPage) {
            if(currentPage >= 1) {
                $scope.isLoading = !$scope.isLoading;
                var start = pageSize * (currentPage - 1);
                getMovie(start, $routeParams.text);
                $scope.currentPage--;
            }
        };

    }]);
});