
 var myApp = angular 
 								.module('myModule', [])
 								.controller('myController', function($scope){

 										var employees = [
 											{ name: "Joe", gender: "Male", salary: 65000, city: "London" },
 											{ name: "Jody", gender: "Male", salary: 55000, city: "Manchester" },
 											{ name: "Jane", gender: "Female", salary: 45000, city: "Spain" },
 											{ name: "Angela", gender: "Female", salary: 35000, city: "Lisbon" },
 											{ name: "Edward", gender: "Male", salary: 25000, city: "Budapest" },
 											{ name: "Paul", gender: "Male", salary: 34000, city: "Vienna" },
 										
 										];
 										
 									$scope.employees = employees;
 									
 								});

