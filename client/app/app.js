'use strict';

angular.module('wwwApiApp', [
  'wwwApiApp.auth',
  'wwwApiApp.admin',
  'wwwApiApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
