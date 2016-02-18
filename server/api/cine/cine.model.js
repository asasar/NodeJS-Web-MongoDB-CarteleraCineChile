'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CineSchema = new mongoose.Schema({
  name: String,
  url: String,
  address: String
});

export default mongoose.model('Cine', CineSchema);
