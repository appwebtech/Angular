// Injecting the service in script2. I'll call the script in index.html. 

var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, stringService) {
            $scope.transformString = function (input) {
                $scope.output = stringService.processString(input);
            };
        });