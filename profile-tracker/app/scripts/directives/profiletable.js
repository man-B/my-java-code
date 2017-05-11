'use strict';

/**
 * @ngdoc directive
 * @name profileTrackerApp.directive:profileTable
 * @description
 * # profileTable
 */
angular.module('profileTrackerApp')
  .directive('profileTable', function () {
    return {
      templateUrl: 'views/table.html',
      restrict: 'E',
      controller: function($scope) {
      $scope.reverseName = function(){
        $scope.name = $scope.profiles1[0].name;
      };
    },
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
