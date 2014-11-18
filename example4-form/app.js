angular.module('app-pg', [])

	.controller('FormCtrl', function ($scope) {

		$scope.user = {};

		$scope.update = function () {

			if ($scope.myform.$valid) {
				console.log("Saved: ", $scope.user);
			} else {
				console.log("Problem with: ", $scope.user);
			}

		};

	})
;