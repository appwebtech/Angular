
 var myApp = angular.module("myModule", []);

 myApp.controller("myController", function($scope) {

 	var employee = {
 		firstName: "Semenya",
 		lastName: "Caster",
 		gender: "Hermaphrodite"
 	};

	$scope.employee = employee;
});

 // USING METHOD CHAINING TO DRY THE CODE.
/*
 var myApp = angular 
 								.module('myModule', [])
 								.controller('myController', function($scope){
 										 	var employee = {
 													firstName: "Semenya",
 													lastName: "Caster",
 													gender: "Hermaphrodite"
 												};

												$scope.employee = employee;	
 									
 								});

*/