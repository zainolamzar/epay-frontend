angular.module('myApp')
  .controller('LoginController', function($scope, $location, AuthService) {
    $scope.login = function() {
      AuthService.login($scope.username, $scope.password)
        .then(function(user) {
          if (user.isAdmin) {
            $location.path('/admin');
          } else if (user.isStudent) {
            $location.path('/student');
          } else {
            alert('Unknown user type');
          }
        }).catch(function(error) {
          $scope.errorMessage = 'Login failed: ' + (error.data.message || 'Unknown error');
        });
    };
});