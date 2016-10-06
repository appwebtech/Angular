(function () {
'use strict';

angular.module('DIApp', [])
.controller('Kasyula', Kasyula);

function Kasyula ($scope,
                       $filter,
                       $injector) {
  $scope.name = "Josembi";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(Kasyula));
}

function AnnonateMe(name, job, blah) {
  return "Blah!";
}

console.log(Kasyula.toString());  // Will parse the whole function as a string in the console.

})();
