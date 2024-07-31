angular.module('myApp')
  .controller('StudentController', function($scope, ApiService) {
    $scope.title = 'Student Dashboard';

    $scope.students = [];

    ApiService.getStudents().then(function(response) {
      $scope.students = response.data;
    }, function(error) {
      console.error('Error fetching students:', error);
    });
});