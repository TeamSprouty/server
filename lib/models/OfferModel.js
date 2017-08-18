const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {	'swapper' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'swapperplants' : Array,	'swappee' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'swappeeplants' : Array,	'dateoffered' : Date,	'expired' : Boolean,	'accepted' : Boolean}

let OfferSchema = new Schema(fields);

module.exports = mongoose.model('Offer', OfferSchema);
