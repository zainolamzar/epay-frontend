angular.module('myApp')
  .factory('ApiService', function($http) {
    const apiUrl = 'http://localhost:3000';

    return {
      getStudents: function() {
        return $http.get(`${apiUrl}/students`);
      },
      getAdmins: function() {
        return $http.get(`${apiUrl}/admins`);
      },
      getCourses: function() {
        return $http.get(`${apiUrl}/courses`);
      },
      getSemesters: function() {
        return $http.get(`${apiUrl}/semesters`);
      },
    };
});