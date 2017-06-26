'use strict';

/**
 * @ngdoc function
 * @name eastsideplayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eastsideplayApp
 */
angular.module('victorBoilerApp')
  .controller('MainCtrl', ['$rootScope', '$scope','$state', '$sce', 'headerCore',
  	function ($rootScope, $scope, $state, $sce, headerCore) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var newState;

    $scope.siteState = headerCore;

    $scope.$watch('current', function(){
    	newState = $state.current.name;
    	headerCore.setState(newState);
    });

	}
]);
