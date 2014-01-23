'use strict';

angular.module('tarotReaderApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.newRandomCard = function () {
      $scope.randomCardLoaded = false;
      $http.get('/api/cards/random').success(function(randomCard) {
        $scope.randomCard = randomCard[0];
        $scope.randomCardLoaded = true;
      });
    };
  });
