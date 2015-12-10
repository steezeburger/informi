/* jshint latedef:false */

'use strict';

angular
  .module('informiApp')
  .factory('WeatherData', WeatherData);

  WeatherData.$inject = ['$http'];

  function WeatherData($http) {
    return {
      getWeatherPacket : getWeatherPacket
    };

    function getWeatherPacket() {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?id=4544349&APPID=2a37ed488b0ff33b9b15529a619c5963')
        .then((response) => {
          return response.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }


  }
