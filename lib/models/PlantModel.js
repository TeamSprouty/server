const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {
	'name' : String,
	'size' : String,
	'color' : Array,
	'desc' : String,
	'price' : Number,
	'shippingcost' : Number,
	'country' : String,
	'category' : String,
	'medicinal' : Boolean,
	'posted' : Date,
	'indoor' : Boolean,
	'available' : Boolean,
	'owner' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'images' : [{
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	}]
}

let PlantSchema = new Schema(fields);

module.exports = mongoose.model('Plant', PlantSchema);
