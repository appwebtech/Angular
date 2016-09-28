var myApp = angular.module('myModule', []);  //Module

var myController = function($scope) {				//Controller
	$scope.message = "AngularJS Tutorial";
};

myApp.controller("myController", myController)


// Housekeeping: The code above can be DRY'd to look like below.

/*
 var myApp = angular.module("myModule", []);

 myApp.controller("myController", function($scope) {
	$scope.message = "AngularJS Tutorial";
});

*/
