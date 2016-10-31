

var application = angular.module('mainApp', []);

application.service('fromService', function(){
	this.message = "This is from Service."
});

application.factory('fromFactory', function(){
	var factory = {};
	factory.message = "This is from factory";
	return factory;
});

application.provider('fromProvider', function(){
	var joe = "This is from provider!";
	return {
		$get: function(){
			return{
				message: joe
			}
		}
	}
});

application.controller('app', function($scope, fromService, fromFactory, fromProvider){
	$scope.josembi = [fromService.message, fromProvider.message, fromFactory.message];
})