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

});
