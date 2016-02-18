'use strict';

var app = require('../..');
import request from 'supertest';

var newCine;

describe('Cine API:', function() {

  describe('GET /api/cines', function() {
    var cines;

    beforeEach(function(done) {
      request(app)
        .get('/api/cines')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          cines = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      cines.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/cines', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/cines')
        .send({
          name: 'New Cine',
          info: 'This is the brand new cine!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCine = res.body;
          done();
        });
    });

    it('should respond with the newly created cine', function() {
      newCine.name.should.equal('New Cine');
      newCine.info.should.equal('This is the brand new cine!!!');
    });

  });

  describe('GET /api/cines/:id', function() {
    var cine;

    beforeEach(function(done) {
      request(app)
        .get('/api/cines/' + newCine._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          cine = res.body;
          done();
        });
    });

    afterEach(function() {
      cine = {};
    });

    it('should respond with the requested cine', function() {
      cine.name.should.equal('New Cine');
      cine.info.should.equal('This is the brand new cine!!!');
    });

  });

  describe('PUT /api/cines/:id', function() {
    var updatedCine;

    beforeEach(function(done) {
      request(app)
        .put('/api/cines/' + newCine._id)
        .send({
          name: 'Updated Cine',
          info: 'This is the updated cine!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCine = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCine = {};
    });

    it('should respond with the updated cine', function() {
      updatedCine.name.should.equal('Updated Cine');
      updatedCine.info.should.equal('This is the updated cine!!!');
    });

  });

  describe('DELETE /api/cines/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/cines/' + newCine._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when cine does not exist', function(done) {
      request(app)
        .delete('/api/cines/' + newCine._id)
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
