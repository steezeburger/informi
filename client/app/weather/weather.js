'use strict';

angular.module('informiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('weather', {
        url: '/weather',
        templateUrl: 'app/weather/weather.html',
        controller: 'WeatherCtrl',
        controllerAs: 'vm'
      });
  });
