/**
 * Cine model events
 */

'use strict';

import {EventEmitter} from 'events';
var Cine = require('./cine.model');
var CineEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CineEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Cine.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    CineEvents.emit(event + ':' + doc._id, doc);
    CineEvents.emit(event, doc);
  }
}

export default CineEvents;
