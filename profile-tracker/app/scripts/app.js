'use strict';

/**
 * @ngdoc overview
 * @name profileTrackerApp
 * @description
 * # profileTrackerApp
 *
 * Main module of the application.
 */
angular
  .module('profileTrackerApp', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ui.router',
    'ngTouch',
    'ui.bootstrap',
    'smart-table'
  ]);

angular.module('profileTrackerApp').config(configure);

configure.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

function configure($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
    	.state('profile', {
            url: "/profile",
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl',
            controllerAs: 'ProfileCtrl'
        })
        .state('about', {
            url: "/about",
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'AboutCtrl'
        });

};