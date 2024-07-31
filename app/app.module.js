// app/app.module.js
angular.module('myApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'components/login/login.html',
        controller: 'LoginController'
      })
      .when('/student', {
        templateUrl: 'components/student/student.html',
        controller: 'StudentController',
        resolve: {
          auth: function(AuthService) {
            return AuthService.isAuthenticated() && AuthService.isAuthorized(['Student']);
          }
        }
      })
      .when('/admin', {
        templateUrl: 'components/admin/admin.html',
        controller: 'AdminController',
        resolve: {
          auth: function(AuthService) {
            return AuthService.isAuthenticated() && AuthService.isAuthorized(['Admin']);
          }
        }
      })
      .otherwise({
        redirectTo: '/login'
      });
});