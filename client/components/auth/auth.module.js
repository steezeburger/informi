'use strict';

angular.module('informiApp.auth', [
  'informiApp.constants',
  'informiApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
