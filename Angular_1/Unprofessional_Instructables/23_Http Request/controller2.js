

var app = angular.module('mainApp', []);

app.controller('people', function($scope, $http){  // Create a fn with access to both scope and http services.
	$http.get('http://localhost/AngularJS/15/database.json')  // Initiate GET http request in the location of the json I created and put in the server.
	.success(function(response){	// If http request successful server gives response.	
		$scope.persons = response.records; // After response, inject scope with the records in the json.
	});
});