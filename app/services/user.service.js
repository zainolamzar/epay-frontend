angular.module('myApp')
  .factory('UserService', function($http) {
    const apiBase = 'http://localhost:3000';

    return {
      login: function(username, password) {
        // Check both admin and student endpoints
        return $http.post(`${apiBase}/auth/login`, { username, password })
          .then(response => response.data);
      }
    };
});