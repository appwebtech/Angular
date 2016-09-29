
 var myApp = angular 
 								.module('myModule', [])
 								.controller('myController', function($scope){
 										var countries = [
 												{
 													name: "UK",
 													cities: [
 															{ name:"London" },
 															{ name:"Belfast" },
 															{ name:"Cardiff" }
 													]
 												},
 												{
 													name: "Kenya",
 													cities: [
 															{ name:"Machakos" },
 															{ name:"Nairobi" },
 															{ name:"Mombasa" }
 													]
 												},
 												{
 													name: "Italy",
 													cities: [
 															{ name:"Rome" },
 															{ name:"Milan" },
 															{ name:"Venice" }
 													]
 												}
 										];
 									$scope.countries = countries;
 								});
