const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {	'offer' : {	 	type: Schema.Types.ObjectId,	 	ref: 'Plant'	},	'seller' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'buyer' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'accepted' : Boolean,	'duedate' : Date,	'sold' : Boolean}

let OrderSchema = new Schema(fields);

module.exports = mongoose.model('Order', OrderSchema);
