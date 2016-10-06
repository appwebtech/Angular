
 var myApp = angular 
 								.module('myModule', [])
 								.controller('myController', function($scope){
 										var employees = [
 										{ firstName: "Jane", lastName: "Doe", gender: "Female", salary:60000 },
 										{ firstName: "John", lastName: "Baptist", gender: "Male", salary:70000 },
 										{ firstName: "Zachariah", lastName: "Taxt-Collector", gender: "Male", salary:25000 },
 										{ firstName: "Semenya", lastName: "Castor", gender: "Shemale", salary:80000 },
 										];
 										
 									$scope.employees = employees;
 									
 								});

