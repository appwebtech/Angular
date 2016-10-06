var demoApp = angular.module("demoApp", [])
                     .controller("demoController", function
                         ($scope, $location, $anchorScroll) {
                         $scope.scrollTo = function (scrollLocation) {
                             $location.hash(scrollLocation);
                             $anchorScroll.yOffset = 20; // Calling yoffset to create padding instead of using CSS.
                             $anchorScroll();
                         }
                     });