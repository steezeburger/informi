'use strict';

angular.module('informiApp')
  .controller('WeatherCtrl', function ($scope, $http) {
    $scope.message = 'Hello';

    $http.get('http://api.openweathermap.org/data/2.5/weather?q=oklahomacity&APPID=2a37ed488b0ff33b9b15529a619c5963')
      .then((res) => {
        $scope.description = {};
        $scope.description.short = res.data.weather[0].main;
        $scope.description.long = res.data.weather[0].description;
        $scope.temperature = ktof(res.data.main.temp);
      });

    function ktof(kelvin) {
      return Math.round( ((kelvin - 273.15)*9/5)+32 );
    }

  });
