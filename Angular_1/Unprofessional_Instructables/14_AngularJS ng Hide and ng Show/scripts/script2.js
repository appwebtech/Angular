
 var myApp = angular 
 								.module('myModule', [])
 					
 								.controller('myController', function($scope){

 										var employees = [
 											{ name: "Joe", gender: "Male", city: "London", salary: 65000 },
 											{ name: "Jody", gender: "Male", city: "Spain", salary: 55000 },
 											{ name: "Jane", gender: "Female", city: "Bratislava", salary: 45000 },
 											{ name: "Angela", gender: "Female", city: "Prague", salary: 35000 },
 											{ name: "Edward", gender: "Male", city: "Dortmund", salary: 25000 },
 											{ name: "John", gender: "Female", city: "Venice", salary: 34000 }
 										
 										];
 										
 									$scope.employees = employees;
 									
 								});
