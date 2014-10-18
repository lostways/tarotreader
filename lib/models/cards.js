'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Card Schema
 */
var CardSchema = new Schema({
  index: Number,
  name: String,
  meaning: String,
  imgUrl: String
});

/**
 * Validations
 */

mongoose.model('Card', CardSchema);
