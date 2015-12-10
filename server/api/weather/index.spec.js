'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var weatherCtrlStub = {
  index: 'weatherCtrl.index',
  show: 'weatherCtrl.show',
  create: 'weatherCtrl.create',
  update: 'weatherCtrl.update',
  destroy: 'weatherCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var weatherIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './weather.controller': weatherCtrlStub
});

describe('Weather API Router:', function() {

  it('should return an express router instance', function() {
    weatherIndex.should.equal(routerStub);
  });

  describe('GET /api/weather', function() {

    it('should route to weather.controller.index', function() {
      routerStub.get
        .withArgs('/', 'weatherCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/weather/:id', function() {

    it('should route to weather.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'weatherCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/weather', function() {

    it('should route to weather.controller.create', function() {
      routerStub.post
        .withArgs('/', 'weatherCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/weather/:id', function() {

    it('should route to weather.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'weatherCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/weather/:id', function() {

    it('should route to weather.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'weatherCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/weather/:id', function() {

    it('should route to weather.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'weatherCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
