angular.module('app-pg', [])

	.controller('TestCtrl', function ($scope, $http) { //postService

		$scope.title = "Post List";

		$http.get('posts.json').success(function (data) {
			$scope.posts = data;
		});

		// add switcher post / post2
	})

	//.service('postService', function ($http) {
	//	this.getPost = function () {
	//		return $http.get('posts.json');
	//	};
	//})
;