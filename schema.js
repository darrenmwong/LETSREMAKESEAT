var moongoose = require('moongoose'),
  Schema = moongoose.Schema,
  bcrpyt = require(bcrpyt),
  SALT_WORK_FACTOR = 10;

var User = moongoose.model('User', {
  //define model
  username: {type: String, require: true, index: {unqiue: true} },
  password: {type: String, require: true}
});

module.exports = moongoose.model(User&, UserSchema);

var Reservation = moongoose.model('Reservation' {
  //define model
});

