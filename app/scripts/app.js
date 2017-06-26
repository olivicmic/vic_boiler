'use strict';

/**
 * @ngdoc overview
 * @name eastsideplayApp
 * @description
 * # eastsideplayApp
 *
 * Main module of the application.
 */
angular
  .module('victorBoilerApp', [
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'updateMeta',
    'ngAnimate'
  ]).run(function($rootScope, $state, $stateParams, $document, $timeout){ 
  	$rootScope.$state = $state;
  	$rootScope.$stateParams = $stateParams;
  	$rootScope.$on('$viewContentLoaded', function() {
  		$timeout(function(){  			
  			$document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0;
  		});
  	});
  });