
 var myApp = angular 
 								.module('myModule', [])
 								.controller('myController', function($scope){
 										var employee = {
 											firstName: "Joe",
 											lastName: "Cool",
 											gender: "Male"
 										};
 										$scope.employee = employee;
 									
 								});

