/*
* @Author: 张婷婷
* @Date:   2016-09-29 14:41:03
* @Last Modified by:   ztt
* @Last Modified time: 2016-11-14 18:37:33
*/

'use strict';
define(['angular'], function() {
	var service = angular.module("renren.http", []);
	service.service('httpService', [function() {
        this.jsonp = function(url, data, fn) {
			function getData(data) {
				fn(data);
				document.body.removeChild(script);
			}

			window['getData'] = getData;

			// 处理data数据
			var searchData = '?';
			
			// if(!data) {
			// 	console.log(data == true);
			// 	searchData = "?" + JSON.stringify(data);
			// }else {
			// 	searchData = "?";
			// }
			for(var i in data) {
				searchData += i + "=" + data[i] + "&";
			}
			
			// 1. 创建script标签
			var script = document.createElement("script");
			// 2. 加入callback = 
			script.src = url + searchData + "callback=getData";
			console.log(script.src);
			// 3. 插入标签
			document.body.appendChild(script);
		}
    }]);

    return service;
});
