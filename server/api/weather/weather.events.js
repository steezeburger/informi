/**
 * Weather model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Weather = require('./weather.model');
var WeatherEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
WeatherEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Weather.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    WeatherEvents.emit(event + ':' + doc._id, doc);
    WeatherEvents.emit(event, doc);
  }
}

module.exports = WeatherEvents;
