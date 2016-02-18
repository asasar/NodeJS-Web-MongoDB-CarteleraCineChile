'use strict';

angular.module('wwwApiApp.auth', [
  'wwwApiApp.constants',
  'wwwApiApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
