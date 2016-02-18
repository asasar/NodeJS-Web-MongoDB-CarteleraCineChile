/**
 * Pelicula model events
 */

'use strict';

import {EventEmitter} from 'events';
var Pelicula = require('./pelicula.model');
var PeliculaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PeliculaEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Pelicula.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PeliculaEvents.emit(event + ':' + doc._id, doc);
    PeliculaEvents.emit(event, doc);
  }
}

export default PeliculaEvents;
