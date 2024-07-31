angular.module('myApp')
  .controller('LoginController', function($scope, $location, AuthService, UserService) {
    $scope.login = function() {
      const user = UserService.getUserByUsername($scope.username);
      if (user) {
        AuthService.login(user.role).then(() => {
          if (user.role === 'Student') {
            $location.path('/student');
          } else if (user.role === 'Admin') {
            $location.path('/admin');
          }
        });
      } else {
        alert('User not found');
      }
    };
});