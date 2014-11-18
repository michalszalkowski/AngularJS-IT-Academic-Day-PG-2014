angular.module('app-pg', ['ngRoute'])


	.config(function ($routeProvider) {

		$routeProvider.
			when('/dashboard', {
				templateUrl: 'partial/dashboard.html',
				controller: 'DashboardCtrl'
			}).
			when('/about', {
				templateUrl: 'partial/about.html',
				controller: 'AboutCtrl'
			}).
			otherwise({
				redirectTo: '/dashboard'
			})
		;
	})

	.controller('DashboardCtrl', function ($scope) {
		$scope.title = "Dashboard";
	})
	.controller('AboutCtrl', function ($scope) {
		$scope.title = "About";
	})
;