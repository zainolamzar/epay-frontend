angular.module('myApp')
  .controller('AdminController', function($scope, ApiService) {
    $scope.title = 'Admin Dashboard';

    $scope.admins = [];

    ApiService.getAdmins().then(function(response) {
      $scope.admins = response.data;
    }, function(error) {
      console.error('Error fetching admins:', error);
    });
});