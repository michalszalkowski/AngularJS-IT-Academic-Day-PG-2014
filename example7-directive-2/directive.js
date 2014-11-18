angular.module('app')

	.directive('person', function () {
		return {
			scope: {
				person: '=data'
			},
			restrict: 'E',
			replace: true,
			templateUrl: 'tpl/person.html'
		}
	})

	.directive('personForm', function (peopleMockService) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'tpl/person.form.html',
			controller: function ($scope) {


				$scope.update = function () {

					if ($scope.myform.$valid) {

						$scope.message = 'success';
						peopleMockService.save($scope.person);
						$scope.person = {};

					} else {
						$scope.message = 'error';
					}

				}
			}
		}
	})
;