const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {
	'name' : String,
	'size' : String,
	'color' : Array,
	'desc' : String,
	'price' : Number,
	'country' : String,
	'category' : String,
	'medicinal' : Boolean,
	'indoor' : Boolean,
	'owner' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	}
}

let PlantSchema = new Schema(fields);

module.exports = mongoose.model('Plant', PlantSchema);
