'use strict';

/**
 * @ngdoc function
 * @name profileTrackerApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the profileTrackerApp
 */
angular.module('profileTrackerApp')
  .controller('ProfileCtrl', function ($scope, $uibModal) {

    $scope.profiles = [];
    $scope.addProfile = function(){

    var modalInstance = $uibModal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      resolve: {
        profile : function(){
          return $scope.profile;
        }
      }
    });

    modalInstance.result.then(function (profile) {
      $scope.profiles.push(profile);
    }, function () {
      //$log.info('Modal dismissed at: ' + new Date());
    });
    }
  });

var ModalInstanceCtrl = function ($scope, $uibModalInstance, profile) {

  $scope.profile = profile;

  $scope.ok = function () {
    $uibModalInstance.close($scope.profile);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
};
