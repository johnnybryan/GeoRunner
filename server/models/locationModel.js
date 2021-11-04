const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  coordinates: {
    lat: {type: Number},
    lng: {type: Number}
  },
  country: String
})

module.exports = mongoose.model('Locations', locationSchema);