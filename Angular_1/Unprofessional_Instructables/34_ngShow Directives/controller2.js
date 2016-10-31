
var application = angular.module('mainApp', []);

application.controller('jose', function($scope){
  $scope.show = 'msg1';
  $scope.toggle = function(){
  	$scope.show = $scope.show == 'msg1' ? 'msg2' : 'msg1';
  }
});