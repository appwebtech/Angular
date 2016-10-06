var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, $http) {
            $http({
                  method: 'GET',
                  url:'EmployeeService.asmx/GetAllEmployees'})
            .then(function (response) {
                $scope.employees = response.data;
            });   
        });
