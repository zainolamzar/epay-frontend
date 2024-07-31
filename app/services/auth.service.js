angular.module('myApp')
  .factory('AuthService', function($q) {
    let user = null;

    return {
      login: function(role) {
        user = { role: role }; // In a real application, you would authenticate and fetch the user role from a backend
        return $q.resolve(user);
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
        return roles.includes(user.role);
      }
    };
});