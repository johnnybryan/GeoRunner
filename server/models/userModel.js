const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  score: {type: Number}
});

userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, saltRounds, function (err, hash) {
    if (err) return next(err);
    this.password = hash;
    return next();
  })
})

module.exports = mongoose.model('User', userSchema);