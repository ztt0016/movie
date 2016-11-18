/*
* @Author: 张婷婷
* @Date:   2016-09-29 14:41:03
* @Last Modified by:   ztt
* @Last Modified time: 2016-11-14 18:37:35
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


