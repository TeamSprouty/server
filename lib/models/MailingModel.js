const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {	'street' : String,	'zip' : Number,	'city' : String,	'country' : String,	'instructions' : String,	'owner' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	}}

let MailingSchema = new Schema(fields);

module.exports = mongoose.model('Mailing', MailingSchema);
