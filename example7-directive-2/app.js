angular.module('app', [])

	.controller('TestCtrl', function ($scope, peopleMockService) {
		$scope.people = peopleMockService.getPeople();
	})
;