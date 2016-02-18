'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var listCinesSchema = new mongoose.Schema({
    name: String,
    infoCine: String
});

var PeliculaSchema = new mongoose.Schema({
    name: String,
    link: String,
    img: String,
    cines:[listCinesSchema]
});

export
default mongoose.model('Pelicula', PeliculaSchema);