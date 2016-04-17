var cards = angular.module('cards', []);

cards.controller('CardsController', ['$scope',
  function($scope){
    $scope.greeting = 'Alo'
    $scope.personName = "Mundo";

    $scope.up = function(text){
      return text.toUpperCase();
    }
    $scope.english = function(){
      $scope.greeting = 'Hello';
    }
    $scope.portuguese= function(){
      $scope.greeting = 'Alo';
    }
  }
]);

cards.controller('FiltersController', ['$scope', 'reverseFilter',
  function($scope, reverseFilter){
    $scope.list = [1,2,3,4,5,6,7,8,9];
    $scope.fruits = ['apple', 'oranges', 'strawberry', 'grape', 'banana', 'cherry', 'lemon';
    $scope.reverseValue = reverseFilter('João Pessoa');
  }
]);

cards.filter('reverse', function(){
  return function(input){
    // Transforma o string em uma lista, inverte os elementos
    // da lista e junta os elementos invertidos.
    return input.split('').reverse().join('');
  };
});


cards.filter('emailFilter', function(){
  return function(nome){
    var nomeList = nome.split(" ");
    var primeiroNome = nomeList[0];
    var ultimoNome = nomeList[nomeList.length - 1];
    if (nomeList.length > 1) {
      var email = primeiroNome + "." + ultimoNome + "@dcx.ufpb.br";
      return email;
    } else {
      var email = primeiroNome + "@dcx.ufpb.br";
      return email;
    }
  };
});

/*
cards.directive('myList', function(){
  return {
    restrict: 'E',
    templateUrl: 'mylist.html',
    scope: {
      list: '=aList',
    },
  };
});
*/
cards.controller('FormsController', ['$scope',
  function($scope){
    $scope.clear = function (){
      $scope.user = {};
    };
}]);
