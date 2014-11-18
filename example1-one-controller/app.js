angular.module('app-pg', [])

	.controller('TestCtrl', function ($scope) {

		$scope.title = "Post List";

		$scope.posts = [
			{name: 'Lorem 1', typ: 1, status: true},
			{name: 'Lorem 2', typ: 2, status: false},
			{name: 'Lorem 3', typ: 3, status: true},
			{name: 'Lorem 4', typ: 1, status: true},
			{name: 'Lorem 5', typ: 2, status: true},
			{name: 'Lorem 6', typ: 3, status: true}
		];

		//$scope.addItem = function (newName) {
		//	$scope.posts.push({name: newName, typ: 4, status: true});
		//};

	})
;