/*
* @Author: 虚竹
* @Date:   2016-09-29 14:41:03
* @Last Modified by:   虚竹
* @Last Modified time: 2016-10-07 13:12:35
*/

'use strict';
define(['angular'], function(angular) {
    var directive = angular.module("renren.directive", []);
    directive.directive('autoFocus', function() {
        return {
            restrict: "EA",
            link: function(scope, element, attr) {
                element.on('click', function() {
                    console.log(element);
                    element.parent().children().attr('class', '');
                    element.addClass('active');
                });
            }
        }
    });

    return directive;
});


