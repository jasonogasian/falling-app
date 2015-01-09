angular.module('FallingApp', [
  'FallingApp.controllers'
]);

angular.module('FallingApp.controllers', ['ngMaterial'])
.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle();
  };
})
.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('left').close();
  };
});