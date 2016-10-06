
 var myApp = angular 
 								.module('myModule', [])
 								.controller('myController', function($scope){
 										var technologies = [
 										{ name:"Ruby on Rails", likes: 0, dislikes: 0 },
 										{ name:"jQuery", likes: 0, dislikes: 0 },
 										{ name:"ReactJS", likes: 0, dislikes: 0 },
 										{ name:"Bootstrap", likes: 0, dislikes: 0 },
 										{ name:"C#", likes: 0, dislikes: 0 },
 										{ name:"C++", likes: 0, dislikes: 0 },
 										{ name:"ASP.NET", likes: 0, dislikes: 0 },
 										{ name:"SQL Server", likes: 0, dislikes: 0 },

 										];

 										$scope.technologies = technologies;

 										$scope.incrementLikes = function (josembi) {
 											josembi.likes++;
 										}

 										$scope.incrementDislikes = function (josembi) {
 											josembi.dislikes++;
 										}
 										
 									
 									
 								});

