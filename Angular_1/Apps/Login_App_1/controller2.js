/* Introducing Template URL.
- Template url will accept a file eg (name.html), launch Ajax request and 
feed it's contents to ng-view. 
- Username and password are both "admin"
*/

var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', { templateUrl: 'login.html' })
								.when('/dashboard', { templateUrl: 'dashboard.html' })
								.otherwise({ redirectTo: '/' });
});


// fn is inside controller and not global.
app.controller('loginCtrl', function($scope, $location){
	$scope.submit = function(){
		var uname = $scope.username;
		var password = $scope.password;
		if($scope.username == 'admin' && $scope.password == 'admin'){
			$location.path('/dashboard');
		} else{
			alert('Wrong password or username');
		}
	};
});