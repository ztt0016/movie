/*
* @Author: 张婷婷
* @Date:   2016-10-07 13:07:34
* @Last Modified by:   ztt
* @Last Modified time: 2016-11-14 18:37:29
*/

'use strict';

require.config({
	paths: {
		jquery: 'bower_components/jquery',
		angular: 'bower_components/angular/angular.min',
		angularRoute: 'bower_components/angular-route/angular-route.min'
	},
	shim: {
		'angular' : {
			'exports' : 'angular'
		},
		'angularRoute': ['angular']
	},
	priority: [
		"jquery"
	]
});

require([
	'angular',
	'renren'
	], function(angular) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['renren']);
			
		});
	}
);