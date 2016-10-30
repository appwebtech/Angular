/* Introducing Template URL.
- Template url will accept a file eg (name.html), launch Ajax request and 
feed it's contents to ng-view. 
- Username and password are both "admin"
- Introducing "resolve"
-$rootScope is used globally
*/

var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', { templateUrl: 'login.html' })
								.when('/dashboard', { 
									resolve: {"check": function($location, $rootScope){
										if(!$rootScope.loggedIn){
											$location.path('/');
										} else {
											templateUrl: 'dashboard.html' }
										}
									}
								}
									
								.otherwise({ redirectTo: '/' });
});


// fn is inside controller and not global.
app.controller('loginCtrl', function($scope, $location, $rootScope){
	$scope.submit = function(){

		if($scope.username == 'admin' && $scope.password == 'admin'){
				$rootScope.loggedIn = true;
				$location.path('/dashboard');

		} else{
			alert('Wrong password or username');
		}
	};
});