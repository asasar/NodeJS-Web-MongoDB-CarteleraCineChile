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

});
