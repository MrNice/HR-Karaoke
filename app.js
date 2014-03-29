var app = angular.module('karaoke', ['ngRoute'])
  .controller('HomeController', function($scope) {
    $scope.songs = {};
  })
  .controller('VoteController', function($scope) {

  })