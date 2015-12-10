/* jshint latedef:false */

'use strict';

angular
  .module('informiApp')
  .controller('WeatherCtrl', WeatherCtrl);


  function WeatherCtrl($scope, $http, WeatherData) {
    var vm = this;

    WeatherData
      .getWeatherPacket()
      .then((wp) => {
        vm.name = wp.name;
        vm.description = {
          short: wp.weather[0].main,
          long: wp.weather[0].description
        };
        vm.temperature = ktof(wp.main.temp);
      })
      .catch((err) => {
        console.log(err);
      });

    function ktof(kelvin) {
      return Math.round( ((kelvin - 273.15)*9/5)+32 );
    }

  } // end ctrl
