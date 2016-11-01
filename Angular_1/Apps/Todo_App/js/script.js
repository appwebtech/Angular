
var appWebTech = angular.module('joSembi', []);


appWebTech.controller('app', function($scope){

	$scope.tasks = [];
	$scope.searchEnter = function(){
		if(event.which == 13 && $scope.task != ""){
			$scope.addTask();
		}

	};
	$scope.addTask = function(){   // Will transfer text from textbox to browser.

			$scope.tasks.push({'taskMessage':$scope.task, 'status':false});
			console.log($scope.tasks);
			$scope.task = "";
	};
	$scope.contentEdit = function(){
		console.log('josembi');
		event.target.contentEditable = event.target.contentEditable;

	};
});