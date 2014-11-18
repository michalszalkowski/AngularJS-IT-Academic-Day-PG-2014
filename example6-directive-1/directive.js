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
;