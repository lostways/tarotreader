'use strict';

angular.module('tarotReaderApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.saveReading = function() {
      $scope.disableSave = true;
      $http.post('/api/readings', {
        'question' : $scope.question,
        'notes' : $scope.notes,
        'card' : $scope.randomCard._id
      }).success(function () {
        //$scope.readingSaved = true;
      });
    };

    $scope.newRandomCard = function () {
      $scope.disableSave = false;
      $scope.randomCardLoaded = false;
      $http.get('/api/cards/random').success(function(randomCard) {
        $scope.randomCard = randomCard[0];
        $scope.randomCardLoaded = true;
      });
    };
  });
