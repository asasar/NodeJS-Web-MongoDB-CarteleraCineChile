/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/cines              ->  index
 * POST    /api/cines              ->  create
 * GET     /api/cines/:id          ->  show
 * PUT     /api/cines/:id          ->  update
 * DELETE  /api/cines/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Cine from './cine.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Cines
export function index(req, res) {
  Cine.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Cine from the DB
export function show(req, res) {
  Cine.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Cine in the DB
export function create(req, res) {
  Cine.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Cine in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Cine.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Cine from the DB
export function destroy(req, res) {
  Cine.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
