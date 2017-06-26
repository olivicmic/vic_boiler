'use strict';

angular.module('victorBoilerApp').config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

	$locationProvider.html5Mode(true).hashPrefix('!');

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		controller: 'MainCtrl',
		templateUrl: 'views/main.html'
	})
	.state('page2', {
		url: '/page2',
		controller: 'MainCtrl',
		templateUrl: 'views/page2.html'
	})
	.state('page3', {
		url: '/page3',
		controller: 'MainCtrl',
		templateUrl: 'views/page3.html'
	});
});


