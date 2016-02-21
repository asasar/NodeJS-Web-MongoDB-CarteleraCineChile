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



});
