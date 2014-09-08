var seat = angular.module('seat', []); //initiate angular module

function mainController($scope, $http) {
  $scope.formData = {};


  //Loading landing page, get all from database and show
  $http.get('/api/todos')
    .success(function(data) {
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

    
}
