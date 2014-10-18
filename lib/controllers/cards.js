'use strict';

var mongoose = require('mongoose'),
    Card = mongoose.model('Card');
/**
 * Get Cards
**/
exports.index  = function(req, res) {
  return Card.find(function (err, data) {
    if (!err) {
      return res.json(data);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Get Card
**/
exports.show = function(req, res) {
  return Card.findById(req.params.id, function (err, data) {
    if (!err) {
      return res.send(data);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Get Random Card
**/
exports.random = function(req, res) {
  var randIndex = Math.floor(Math.random() * (76 + 1)) + 0;
  return Card.find({'index': randIndex}, function (err, data) {
    if(!err) {
      return res.send(data);
    } else {
      return res.send(err);
    }
  });
};
