
var application = angular.module('mainApp', []);

application.service('random', function(){

		var num = Math.floor(Math.random()*10); // Create a random number and assign it to a var.
		this.generate = function(){ // this will point at 'random'
			return num;
		}
});

application.controller('app', function($scope, random){ // Pass both $scope and service.
	$scope.generateRandom = function(){
		$scope.randomNumber = random.generate(); // Assign scope to service
	}

});

//-----------> Services in AngularJS are singletons 
//--------> RAN SERVICE. (First Click on Button)
//--------> PASSED THE REFERENCE OF THE SERVICE AND NOT THE SERVICE ITSELF. (Second Click)
//This is pretty handy if you are getting data from a server and want to display it on the controller. 
//It's way much convenient to use Angular than vanilla JS for such operations.