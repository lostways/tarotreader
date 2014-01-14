'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Card = mongoose.model('Card');
/**
 * Get Cards
**/
exports.cards  = function(req, res) {
  return Card.find(function (err, data) {
    if (!err) {
      return res.json(data);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};
