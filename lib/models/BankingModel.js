const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {	'cc' : Number,	'zip' : Number,	'firstname' : String,	'lastname' : String,	'street' : String,	'cvc' : Number,	'owner' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	}}

let BankingSchema = new Schema(fields);

module.exports = mongoose.model('Banking', BankingSchema);
