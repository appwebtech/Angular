
 var myApp = angular 
 								.module('myModule', [])
 								.controller('myController', function($scope){
 										 	var country = {
 													name: "Kenya",
 													capital: "Nairobi",
 													flag: "images/Kenya-Flag.png"
 												};

												$scope.country = country;	
 									
 								});

