'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var WeatherSchema = new Schema({
  city_id: { type: Number, required: true },
  name: { type: String, required: true },
  temperature: { type: Number, required: true },
  description: Schema.Types.Mixed,
  timestamp: {
    type: Date,
    required: true,
    default: new Date()
  }
});

module.exports = mongoose.model('WeatherRecord', WeatherSchema);
