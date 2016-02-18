'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var cineCtrlStub = {
  index: 'cineCtrl.index',
  show: 'cineCtrl.show',
  create: 'cineCtrl.create',
  update: 'cineCtrl.update',
  destroy: 'cineCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var cineIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './cine.controller': cineCtrlStub
});

describe('Cine API Router:', function() {

  it('should return an express router instance', function() {
    cineIndex.should.equal(routerStub);
  });

  describe('GET /api/cines', function() {

    it('should route to cine.controller.index', function() {
      routerStub.get
        .withArgs('/', 'cineCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/cines/:id', function() {

    it('should route to cine.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'cineCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/cines', function() {

    it('should route to cine.controller.create', function() {
      routerStub.post
        .withArgs('/', 'cineCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/cines/:id', function() {

    it('should route to cine.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'cineCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/cines/:id', function() {

    it('should route to cine.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'cineCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/cines/:id', function() {

    it('should route to cine.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'cineCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
