const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  hash: { type: String },
  profile_pic: { type:String},
  rating: Number,
  bankcards: [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'Banking'
  }],
  plants : [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'Plant'
  }],
  addresses : [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'Mailing'
	}]
});

schema.static('exists', function (query) {
  return this.find(query)
    .count()
    .then(count => (count > 0));
});
//Methods below are for app encryption
schema.method('generateHash', function (password) {
  this.hash = bcrypt.hashSync(password, 8);
});

schema.method('comparePassword', function (password) {
  return bcrypt.compareSync(password, this.hash);
});

module.exports = mongoose.model('User', schema);