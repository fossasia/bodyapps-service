/*
 * Copyright (c) 2014, Fashiontec (http://fashiontec.org)
 * Licensed under LGPL, Version 3
 */

/*
 * User model for the bodyapps backend. 
 * 
 * Model is defined via Mongoose. Users can be uniquely identified 
 * by their email-address.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  name: String,
  dob: { type: Date},
  email: String
});
