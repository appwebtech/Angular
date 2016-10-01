var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {
            var countries = [
                {
                    name: "Kenya",
                    cities: [
                        { name: "Machakos" },
                        { name: "Makueni" }
                    ]
                },
                {
                    name: "USA",
                    cities: [
                        { name: "Los Angeles" },
                        { name: "Chicago" },
                    ]
                }
            ];

            $scope.countries = countries;
        });
