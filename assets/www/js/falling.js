angular.module('FallingApp', [
  'FallingApp.controllers'
]);

angular.module('FallingApp.controllers', ['ngMaterial'])
.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.openNav = function() {
    $mdSidenav('left').open();
  };
})
.controller('NavCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('left').close();
  };
});