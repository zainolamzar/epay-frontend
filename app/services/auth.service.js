angular.module('myApp')
  .factory('AuthService', function($q, $location, UserService) {
    let user = null;

    return {
      login: function(username, password) {
        return UserService.login(username, password)
          .then(function(userData) {
            user = userData; // Store the user data
            return $q.resolve(user);
          }, function(error) {
            return $q.reject(error);
          });
      },
      logout: function() {
        user = null;
        return $q.resolve();
      },
      getUser: function() {
        return user;
      },
      isAuthenticated: function() {
        return !!user;
      },
      isAuthorized: function(roles) {
        if (!user) return false;
        // Additional role-based checks can be added if needed
        return true;
      },

      checkAuth: function() {
        if (!this.isAuthenticated()) {
          $location.path('/login');
          return $q.reject('Not authenticated');
        }
        return $q.resolve();
      }
    };
});