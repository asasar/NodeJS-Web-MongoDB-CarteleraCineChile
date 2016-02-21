'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var peliculaCtrlStub = {
  index: 'peliculaCtrl.index',
  show: 'peliculaCtrl.show',
  create: 'peliculaCtrl.create',
  update: 'peliculaCtrl.update',
  destroy: 'peliculaCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var peliculaIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './pelicula.controller': peliculaCtrlStub
});

describe('Pelicula API Router:', function() {

  it('should return an express router instance', function() {
    peliculaIndex.should.equal(routerStub);
  });

  describe('GET /api/peliculas', function() {

    it('should route to pelicula.controller.index', function() {
      routerStub.get
        .withArgs('/', 'peliculaCtrl.index')
        .should.have.been.calledOnce;
    });

  });


});
