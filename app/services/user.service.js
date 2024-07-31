angular.module('myApp')
  .factory('UserService', function() {
    const users = [
      { username: 'student', role: 'Student' },
      { username: 'admin', role: 'Admin' }
    ];

    return {
      getUserByUsername: function(username) {
        return users.find(user => user.username === username);
      }
    };
});