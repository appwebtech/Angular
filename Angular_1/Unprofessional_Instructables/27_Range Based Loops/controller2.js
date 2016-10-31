
var app = angular.module('mainApp', []);

app.controller('app', function($scope){
	var range = 10;
	var joSembi = [];
	for (i=0; i<range; i++){
		  joSembi.push(i);
	}
	$scope.joSembi = joSembi;
});
