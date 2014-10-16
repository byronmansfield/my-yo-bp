'use strict';

/**
 * @ngdoc function
 * @name audioplayerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the audioplayerApp
 */
angular.module('audioplayerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
