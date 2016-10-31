
var appWebTech = angular.module('joSembi', []);


appWebTech.controller('app', function($scope){

	$scope.tasks = [];
	$scope.searchEnter = function(){
		if(event.which == 13 && $scope.task != ""){
			$scope.addTask();
		}
	};
	$scope.addTask = function(){   // Will transfer text from textbox to browser.

			$scope.tasks.push($scope.task);
			console.log($scope.task);
			$scope.task = "";
	};
});