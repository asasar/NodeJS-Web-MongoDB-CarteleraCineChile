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

  describe('GET /api/peliculas/:id', function() {

    it('should route to pelicula.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'peliculaCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/peliculas', function() {

    it('should route to pelicula.controller.create', function() {
      routerStub.post
        .withArgs('/', 'peliculaCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/peliculas/:id', function() {

    it('should route to pelicula.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'peliculaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/peliculas/:id', function() {

    it('should route to pelicula.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'peliculaCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/peliculas/:id', function() {

    it('should route to pelicula.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'peliculaCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
