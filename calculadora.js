var calcApp = angular.module('calcApp', []);

calcApp.factory('arithmetic', function(){
  return {
    add: function(x, y){
      return x+ y;
    },

    sub: function(x, y){
      return x - y;
    },
  };
});

calcApp.controller('CalcController', ['$scope', 'arithmetic',
  function($scope, arithmetic){
  $scope.operator1 = 0;
  $scope.operator2 = 0;

  $scope.add = function(){
    $scope.result = arithmetic.add($scope.operator1, $scope.operator2);
  };
  $scope.sub = function(){
    $scope.result = arithmetic.sub($scope.operator1, $scope.operator2);
  };
  
}]);
