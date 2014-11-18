angular.module('app', [])
	.controller('TestCtrl', function ($scope) {

		$scope.person = {
			'name': 'Michał Szałkowski',
			'nickname': 'Szałek',
			'address': {
				'name': 'Twitter, Inc.',
				'row1': '795 Folsom Ave, Suite 600',
				'row2': 'San Francisco, CA 94107',
				'phone': '(123) 456-7890'
			},
			'quote': 'Do. Or do not. There is no try'
		};

	})
;