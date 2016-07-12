app.directive('login', function () {

  return {
    'restrict': 'E',
    'templateUrl': 'assets/view/login.html',
    'controller': ['$scope', '$db',
      function ($scope, $db) {
        $scope.login = function () {

        };
      }
    ]
  };

});