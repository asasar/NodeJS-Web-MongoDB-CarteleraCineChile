'use strict';

var app = require('../..');
import request from 'supertest';

var newPelicula;

describe('Pelicula API:', function() {

  describe('GET /api/peliculas', function() {
    var peliculas;

    beforeEach(function(done) {
      request(app)
        .get('/api/peliculas')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          peliculas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      peliculas.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/peliculas', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/peliculas')
        .send({
          name: 'New Pelicula',
          info: 'This is the brand new pelicula!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPelicula = res.body;
          done();
        });
    });

    it('should respond with the newly created pelicula', function() {
      newPelicula.name.should.equal('New Pelicula');
      newPelicula.info.should.equal('This is the brand new pelicula!!!');
    });

  });

  describe('GET /api/peliculas/:id', function() {
    var pelicula;

    beforeEach(function(done) {
      request(app)
        .get('/api/peliculas/' + newPelicula._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          pelicula = res.body;
          done();
        });
    });

    afterEach(function() {
      pelicula = {};
    });

    it('should respond with the requested pelicula', function() {
      pelicula.name.should.equal('New Pelicula');
      pelicula.info.should.equal('This is the brand new pelicula!!!');
    });

  });

  describe('PUT /api/peliculas/:id', function() {
    var updatedPelicula;

    beforeEach(function(done) {
      request(app)
        .put('/api/peliculas/' + newPelicula._id)
        .send({
          name: 'Updated Pelicula',
          info: 'This is the updated pelicula!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPelicula = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPelicula = {};
    });

    it('should respond with the updated pelicula', function() {
      updatedPelicula.name.should.equal('Updated Pelicula');
      updatedPelicula.info.should.equal('This is the updated pelicula!!!');
    });

  });

  describe('DELETE /api/peliculas/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/peliculas/' + newPelicula._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when pelicula does not exist', function(done) {
      request(app)
        .delete('/api/peliculas/' + newPelicula._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
