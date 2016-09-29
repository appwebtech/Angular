
 var myApp = angular 
 								.module('myModule', [])
 								.controller('myController', function($scope){

 										var employees = [
 											{ name: "Joe", dateOfBirth: new Date("August 16, 1964"), gender: "Male", salary: 65000 },
 											{ name: "Jane", dateOfBirth: new Date("January 14, 1988"), gender: "Female", salary: 35000 },
 											{ name: "Mark", dateOfBirth: new Date("April 24, 1984"), gender: "Male", salary: 55000 },
 											{ name: "Kivondo", dateOfBirth: new Date("January 13, 1972"), gender: "Male", salary: 500 },
 											{ name: "Jobs", dateOfBirth: new Date("July 18, 1968"), gender: "Male", salary: 94000000 },
 											{ name: "Rihanna", dateOfBirth: new Date("October 09, 1988"), gender: "Female", salary: 75000000 },
 											{ name: "Doe", dateOfBirth: new Date("September 30, 1987"), gender: "Male", salary: 78000 },
 											{ name: "Mark", dateOfBirth: new Date("May 10, 1977"), gender: "Male", salary: 48000 },

 										];
 										
 										$scope.employees = employees;
 										$scope.sortColumn = "name";
 										$scope.reverseSort = "false";

 										$scope.sortData = function (column) {
 												$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
 												$scope.sortColumn = column;
 										}
 										
 										$scope.getSortClass = function (column) {
 											if($scope.sortColumn == column) {
 												return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
 											}

 											return '';
 										}
 									
 								});

