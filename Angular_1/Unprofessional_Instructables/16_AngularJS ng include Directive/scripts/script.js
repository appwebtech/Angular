var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {
          var employees = [
            { name: "Joe", gender: "Male", salary: "65000" },
            { name: "Jude", gender: "Male", salary: "55000" },
            { name: "Jody", gender: "Male", salary: "25000" },
            { name: "Judy", gender: "Female", salary: "45000" },
            { name: "Jane", gender: "Female", salary: "35000" },
            { name: "Jobs", gender: "Male", salary: "85000" }
          ];

            $scope.employees = employees;
        });
