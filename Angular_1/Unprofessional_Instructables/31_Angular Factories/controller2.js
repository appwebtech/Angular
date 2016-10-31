
// Swap Service to Factory
// 'this' is substituted to an object in my case I'll use randomObject.

var application = angular.module('mainApp', []);

application.factory('random', function(){

		var randomObject = {};
		var num = Math.floor(Math.random()*10); // Create a random number and assign it to a var.
		randomObject.generate = function(){ // this will point at 'random'
			return num;
		}
		return randomObject;  // make randomObject accessible
});

application.controller('app', function($scope, random){ // Pass both $scope and service.
	$scope.generateRandom = function(){
		$scope.randomNumber = random.generate(); // Assign scope to service
	}

});

