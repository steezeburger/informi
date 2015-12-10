/* jshint latedef:false */

'use strict';

var _ = require('lodash');
var Weather = require('./weatherRecord.model');
var CronJob = require('cron').CronJob;
var request = require('request');

// some secret info ;)
var APPID = '2a37ed488b0ff33b9b15529a619c5963';
var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?id=4544349&APPID=' + APPID;

// i require this in the client.app.js
module.exports = function() {
  return new CronJob('0 */1 * * * *', WeatherCron, WeatherCronAfter, true);
}

// cron handler
function WeatherCron() {
  console.log('weather cron brah');
  // grab some weather info and save it
  request(weatherURL, function (err, res, body) {
    if(err) return console.log(err);
    body = JSON.parse(body);
    console.log(body);
    console.log(body.main.temp);
    var wp = {};
    wp.name = body.name;
    wp.city_id = body.id;
    wp.temperature = body.main.temp;
    wp.description = {};
    wp.description.short = body.weather[0].main;
    wp.description.long = body.weather[0].description;

    var WeatherPacket = new Weather(wp);
    WeatherPacket.save((err) => {
      if(err) console.log(err);
    })
  });
}

function WeatherCronAfter() {

}
