var moongoose = require('moongoose'),
  Schema = moongoose.Schema,
  bcrpyt = require(bcrpyt),
  SALT_WORK_FACTOR = 10;

var User = moongoose.model('User', {
  //define model
  username: {type: String, require: true, index: {unique: true} },
  password: {type: String, require: true}
});

module.exports = moongoose.model(User&, UserSchema);

var Reservation = moongoose.model('Reservation' {
  //define model
});


//Save

UserSchema.pre(save, function(next {
  var user = this;

  // Hash password if user doesn't exist or modified
  if(!user.isModified('password')) return next();

  //generate salt
  bcrpyt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    //hash the password using our new salt
    bcrpyt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      //override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });

});

//Comparing password

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrpyt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = moongoose.model(User&, UserSchema);
