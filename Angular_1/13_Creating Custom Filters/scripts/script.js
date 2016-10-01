
 var myApp = angular 
 								.module('myModule', [])
 					
 								.controller('myController', function($scope){

 										var employees = [
 											{ name: "Joe", gender: 1, salary: 65000 },
 											{ name: "Jody", gender: 1, salary: 55000 },
 											{ name: "Jane", gender: 2, salary: 45000 },
 											{ name: "Angela", gender: 2, salary: 35000 },
 											{ name: "Edward", gender: 1, salary: 25000 },
 											{ name: "Semenya", gender: 3, salary: 34000 }
 										
 										];
 										
 									$scope.employees = employees;
 									
 								});

