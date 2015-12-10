'use strict';

var app = require('../..');
var request = require('supertest');

var newWeather;

describe('Weather API:', function() {

  describe('GET /api/weather', function() {
    var weathers;

    beforeEach(function(done) {
      request(app)
        .get('/api/weather')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          weathers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      weathers.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/weather', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/weather')
        .send({
          name: 'New Weather',
          info: 'This is the brand new weather!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newWeather = res.body;
          done();
        });
    });

    it('should respond with the newly created weather', function() {
      newWeather.name.should.equal('New Weather');
      newWeather.info.should.equal('This is the brand new weather!!!');
    });

  });

  describe('GET /api/weather/:id', function() {
    var weather;

    beforeEach(function(done) {
      request(app)
        .get('/api/weather/' + newWeather._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          weather = res.body;
          done();
        });
    });

    afterEach(function() {
      weather = {};
    });

    it('should respond with the requested weather', function() {
      weather.name.should.equal('New Weather');
      weather.info.should.equal('This is the brand new weather!!!');
    });

  });

  describe('PUT /api/weather/:id', function() {
    var updatedWeather

    beforeEach(function(done) {
      request(app)
        .put('/api/weather/' + newWeather._id)
        .send({
          name: 'Updated Weather',
          info: 'This is the updated weather!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedWeather = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedWeather = {};
    });

    it('should respond with the updated weather', function() {
      updatedWeather.name.should.equal('Updated Weather');
      updatedWeather.info.should.equal('This is the updated weather!!!');
    });

  });

  describe('DELETE /api/weather/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/weather/' + newWeather._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when weather does not exist', function(done) {
      request(app)
        .delete('/api/weather/' + newWeather._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
