'use strict';

var express = require('express');
var controller = require('./pelicula.controller');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;
